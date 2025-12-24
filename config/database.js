import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "Login",
      bufferCommands: false,
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
  }
}

export default connectToDB;
