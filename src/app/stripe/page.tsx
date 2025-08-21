import CheckoutButton from "@/components/CheckoutButton";

export default function StripeDemo() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <h1>Stripe Payment Demo</h1>
      <p style={{ margin: "1rem 0", color: "#666" }}>
        Test payment for Pro Plan – $10
      </p>
      <CheckoutButton />
    </main>
  );
}
