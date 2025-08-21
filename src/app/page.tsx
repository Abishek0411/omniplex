import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.main}>
      {/* Persistent Stripe Navigation Button */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <Link href="/stripe">
          <button
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
            Test Payment Page
          </button>
        </Link>
      </div>

      {/* Existing Content Below */}
      <AuthWrapper>
        <MainPrompt />
      </AuthWrapper>
    </div>
  );
};

export default Home;
