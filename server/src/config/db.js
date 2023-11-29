import mongoose from "mongoose"

mongoose.set("strictQuery", false)

export async function ConnectDB() {

    const url = process.env.DB_URL ; 
    try {
        if (!url) {
            throw new Error("DB URL not defined");
        }

        await mongoose.connect(url);
        console.log(`Database connected!`);
    } catch (error) {
        console.error(error);
    }
};

export default ConnectDB;