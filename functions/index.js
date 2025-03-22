import functions from "firebase-functions";
import Razorpay from "razorpay";
import express from "express";
import cors from "cors";

// Express app for API
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

// Create Razorpay Order
app.post("/create-order", async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 100, // Amount in paise
    currency: currency || "INR",
    payment_capture: 1, // Auto-capture payment
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deploy Firebase Function
export const api = functions.https.onRequest(app);
