import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import path from 'path'

import cors from "cors"
import { connect } from "mongoose";
import userRoutes from "./routers/userRoutes.js"
import connectToDb from "./db/db.js";
import cartRoutes from "./routers/cartRoutes.js"
// import productRoutes from "./routers/productRoutes.js"


app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174',
    // 'https://batch11-mern-stack-1.onrender.com',
    // 			'https://batch11-mern-stack.vercel.app/',
  ],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}),
);

const __dirname = path.resolve();
// // Serve static frontend files
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

//connect to db
connectToDb()

//middlewares

// app.get("/",(req,res)=>{
//   res.send("server is active")
// })

app.use("/api/auth", userRoutes);
app.use("/api/cart", cartRoutes);
// app.use('/api/products', productRoutes);


// app.listen(5000, () => {
//     console.log("server is listening 5000");
// });


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});






// ------------vercel------
// import express from "express";
// import cors from "cors";
// import connectToDb from "./db/db.js";
// import userRoutes from "./routers/userRoutes.js";
// import cartRoutes from "./routers/cartRoutes.js";
// const app = express();
// // CORS configuration
// app.use(
//   cors({
//     origin: ['http://localhost:5173', 'http://localhost:5174'],
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   })
// );
// app.use(express.json());
// // Connect to MongoDB
// connectToDb();
// // Routes
// app.use("/api/auth", userRoutes);
// app.use("/api/cart", cartRoutes);
// // Vercel expects `app` to be exported
// export default app;
