import mongoose from "mongoose";

const connection = {};

export const connetToDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (err) {
        throw new Error(err);
    }
};