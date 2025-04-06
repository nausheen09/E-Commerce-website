import mongoose from "mongoose";
import 'dotenv/config';
import chalk from "chalk";
const url = process.env.MONGODB_URL;
if (!url) {
    console.error(chalk.bgRed.white("❌ MONGODB_URL is not defined in .env file"));
    process.exit(1); // Stop execution if URL is missing
}
const connectToDb = async () => {
    try {
        await mongoose.connect(url, {
            dbName: "ecommerce" // ✅ Only keep dbName, remove deprecated options
        });
        console.log(chalk.bgGreen.white("✅ Connected to MongoDB"));
    } catch (error) {
        console.error(chalk.bgRed.white("❌ Error in connecting to DB:"), error);
        process.exit(1); // Stop execution on error
    }
};
export default connectToDb;




// --------mis file---------
// import mongoose from "mongoose";
// import 'dotenv/config'
// import chalk from "chalk";
// const url = process.env.MONGODB_URL
// const connectToDb = async () => {
//     try {
//         await mongoose.connect(url, { dbName: "ecommerce" })
//         console.log(chalk.bgGreen.white('connected to MongoDB'));
//     }
//     catch (error) {
//         console.error("error in connecting to db", error)
//     }
// }
// export default connectToDb

// ---------------
// import mongoose from "mongoose";
// import 'dotenv/config';
// import chalk from "chalk";
// const url = process.env.MONGODB_URL;
// const connectToDb = async () => {
//     try {
//         await mongoose.connect(url, {
//             dbName: "ecommerce",
//             serverSelectionTimeoutMS: 5000, // Wait for 5 seconds before failing
//             socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//             connectTimeoutMS: 10000, // Timeout after 10 seconds if can't connect
//         });

//         console.log(chalk.bgGreen.white("✅ Connected to MongoDB"));

//         mongoose.connection.on("disconnected", () => {
//             console.log(chalk.bgYellow.white("⚠️ MongoDB Disconnected! Trying to reconnect..."));
//             connectToDb(); // Auto-reconnect
//         });

//     } catch (error) {
//         console.error(chalk.bgRed.white("❌ MongoDB Connection Error:"), error);
//         setTimeout(connectToDb, 5000); // Retry after 5 seconds
//     }
// };
// export default connectToDb;
