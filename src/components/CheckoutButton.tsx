"use client";

import React from "react";

const CheckoutButton = () => {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("Failed to create checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong during checkout");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        backgroundColor: "#2563eb",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        border: "none",
      }}
    >
      Pay $10 (Test)
    </button>
  );
};

export default CheckoutButton;
