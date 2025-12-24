import "dotenv/config.js";
import cors from "cors";
import express from "express";
import userRoutes from "./routes/UserRoutes.js";
import connectToDB from "./config/database.js";

const PORT = process.env.PORT || 4001;

const app = express();

await connectToDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://login-frontend-eight.vercel.app",
    ],
  })
);

app.use(express.json());

app.use("/login", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
