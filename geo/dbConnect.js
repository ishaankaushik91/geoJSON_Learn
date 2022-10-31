import mongoose from "mongoose";

async function db_Connect()
{
    try {
        
        await mongoose.connect(`connection_string`);
        console.log(`DB connected`);

    } catch (error) {
        console.log(error);
    }
}

db_Connect();
