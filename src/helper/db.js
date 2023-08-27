import { User } from "@/models/user";
import mongoose from "mongoose";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log("inside");
      const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
        dbName: "work_manager",
      });
      config.isConnectionReady = connection.readyState;
      console.log("db connected..");
    }
  } catch (error) {
    console.log("connection failed");
    // console.log(error);
  }
}
