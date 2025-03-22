import { NextResponse } from "next/server";
import { db } from "@/config";
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { userId, orderId, paymentId, amount, currency } = await req.json();

    // 🔹 Save transaction details in "transactions" collection
    const transactionRef = await addDoc(collection(db, "transactions"), {
      userId,
      orderId,
      paymentId,
      amount,
      currency,
      status: "success",
      createdAt: new Date(),
    });

    console.log("Transaction recorded:", transactionRef.id);

    // 🔹 Update user's Firestore document with `isPayment: true`
    const userQuery = query(
      collection(db, "lawyers_details"),
      where("userId", "==", userId)
    );
    const userSnapshot = await getDocs(userQuery);
    userSnapshot.forEach(async (doc) => {
      await updateDoc(doc.ref, {
        isPayment: true,
        transactionId: transactionRef.id,
      });
    });

    return NextResponse.json({
      success: true,
      transactionId: transactionRef.id,
    });
  } catch (error) {
    console.error("Error saving transaction:", error);
    return NextResponse.json(
      { error: "Failed to save transaction" },
      { status: 500 }
    );
  }
}
