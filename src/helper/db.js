import { User } from "@/models/user";
import mongoose from "mongoose";

export async function connectDB() {
    try 
    {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'work_manager'
        });
        // console.log(connection);

        const user = User({
            name: 'Test Name',
            password: 'test@1234',
            email: 'test@email.com',
            about: 'Test About',
            profileURL: 'https://profile.url'
        });
    
        await user.save();
    
        console.log('user saved');
    }
    catch (error) {
        console.log('connection failed');
        // console.log(error);
    }
}