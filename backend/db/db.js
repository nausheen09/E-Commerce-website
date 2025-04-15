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