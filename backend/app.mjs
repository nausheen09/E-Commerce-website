// import express from "express";
// const app = express();

// import cors from "cors"
// import { connect } from "mongoose";
// import userRoutes from "./routers/userRoutes.js"
// import connectToDb from "./db/db.js";
// import cartRoutes from "./routers/cartRoutes.js"


// app.use(cors({
//     origin: ['http://localhost:5173', 'http://localhost:5174'],
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }),
// );
// app.use(express.json());


// //connect to db
// connectToDb()

// //middlewares

// // app.get("/",(req,res)=>{
// //   res.send("server is active")
// // })

// app.use("/api/auth", userRoutes);
// app.use("/api/cart", cartRoutes);

// // app.use('/api/products', productRoutes);

// // app.listen(5000, () => {
// //     console.log("server is listening 5000");
// // });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });



import express from "express";
import cors from "cors";
import connectToDb from "./db/db.js";
import userRoutes from "./routers/userRoutes.js";
import cartRoutes from "./routers/cartRoutes.js";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Connect to MongoDB
connectToDb();

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/cart", cartRoutes);

// Vercel expects `app` to be exported
export default app;
