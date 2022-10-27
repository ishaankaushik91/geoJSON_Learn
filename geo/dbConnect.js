import mongoose from "mongoose";

async function db_Connect()
{
    try {
        
        await mongoose.connect(`mongodb+srv://ishaan:Ishaan123@cluster0.wucwolj.mongodb.net/geo`);
        console.log(`DB connected`);

    } catch (error) {
        console.log(error);
    }
}

db_Connect();