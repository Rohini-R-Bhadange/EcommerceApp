import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import dbConnection from "./db/dbConnection.js";
import orderRouter from "./routes/orderRoutes.js";


dotenv.config();

const app = express();
const PORT = 3000;

/* ================= MIDDLEWARE ================= */
app.use(express.json());

// ✅ FIXED CORS (works for 5173, 5174, any localhost port)
app.use(
  cors({
    origin: true, // allow all origins (DEV SAFE)
    credentials: true,
  })
);

/* ================= DATABASE ================= */
dbConnection();

/* ================= ROUTES ================= */
app.get("/", (req, res) => {
  res.send("Ecommerce Backend is running");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);


/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
