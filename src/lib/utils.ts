import { clsx, type ClassValue } from "clsx";
import Razorpay from "razorpay";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// const handlePayment = async (userId) => {
//   const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
//   if (!res) {
//     alert("Failed to load Razorpay SDK");
//     return;
//   }

//   const options = {
//     key: "RAZORPAY_KEY", // Replace with actual key
//     amount: 50000, // ₹500.00
//     currency: "INR",
//     name: "Legal Services",
//     description: "Lawyer Profile Submission",
//     handler: async function (response) {
//       await setDoc(
//         doc(db, "lawyers_details", userId),
//         { isPayed: true },
//         { merge: true }
//       );
//       alert("Payment Successful! Your profile is submitted.");
//     },
//     prefill: { name: values.name, email: values.email },
//     theme: { color: "#3399cc" },
//   };

//   const paymentObject = new window.Razorpay(options);
//   paymentObject.on("payment.failed", async function () {
//     await deleteDoc(doc(db, "lawyers_details", userId));
//     alert("Payment Failed! Please try again.");
//   });

//   paymentObject.open();
// };

export const capitalizeWords = (str: string | undefined) => {
  if (!str) return "";
  return str
    .toLowerCase() // Ensure consistent casing
    .split(" ") // Split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Rejoin into a string
};

interface Location {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    city?: string;
    state?: string;
    country?: string;
  };
}

interface ParsedLocation {
  city: string;
  state: string;
}

export const parseLocationDetails = (location: Location): ParsedLocation => {
  // Split the display name by commas and clean up whitespace
  const parts = location.display_name.split(",").map((part) => part.trim());

  let city = "";
  let state = "";

  // Try to get city and state from the address object first
  if (location.address) {
    city = location.address.city || "";
    state = location.address.state || "";
  }

  // If address object doesn't have the info, try to parse from display_name
  if (!city || !state) {
    // Usually city is towards the beginning and state is towards the end
    // This is a simplified approach - actual implementation might need refinement
    // based on the specific format of your location data
    if (parts.length >= 3) {
      if (!city) {
        city = parts[0]; // First part is often the city or specific location
      }
      if (!state) {
        // State is usually towards the end, before the country
        // Try to find it in the last few parts
        for (let i = parts.length - 3; i >= 0; i--) {
          const part = parts[i].trim();
          if (part.length > 2 && !part.match(/^\d+$/)) {
            state = part;
            break;
          }
        }
      }
    }
  }

  return {
    city,
    state,
  };
};

const saveTransactionToFirestore = async (
  userId: string,
  paymentResponse: any,
  order: any
) => {
  try {
    const response = await fetch("/api/save-transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        orderId: order.id,
        paymentId: paymentResponse.razorpay_payment_id,
        amount: order.amount / 100,
        currency: order.currency,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Transaction saved with ID:", result.transactionId);
    }
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
};

export const startPayment = async (userData: Record<string, any>) => {
  try {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 999, userId: userData.userId }),
    });

    const order = await response.json();
    if (!order.id) throw new Error("Failed to create Razorpay order");
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "BP Law",
      description: "Lawyer Registration Payment",
      order_id: order.id,
      handler: async function (response: any) {
        if (response.razorpay_payment_id) {
          await saveTransactionToFirestore(userData.userId, response, order);
        }
      },
      prefill: {
        name: userData.userInfo.name,
        email: userData.userInfo.email,
        contact: userData.userInfo.contact,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed.");
  }
};

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};
