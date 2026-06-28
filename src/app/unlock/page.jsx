"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RiLock2Line,
  RiEyeLine,
  RiEyeOffLine,
} from "@remixicon/react";
import { RiLockPasswordLine } from "@remixicon/react";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      window.location.href = "/";
    } else {
      setError("Oops! That password doesn’t seem right. Give it another try. 🥰");
      setShake(true);
      setTimeout(() => setShake(false), 450);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 20px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background: "#9b72cf",
          filter: "blur(125px)",
          opacity: 0.38,
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          marginTop: "60px",
          padding: "55px 42px",
          borderRadius: "30px",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          animation: "fadeIn 0.8s ease forwards",
          transform: cardHovered ? "translateY(-5px)" : "translateY(0)",
          transition: "0.35s ease",
        }}
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
      >
        <Image
          src="/images/JZM-Logo.png"
          alt="Jennyfer Z Mouawad Logo"
          width={120}
          height={120}
          priority
          style={{
            display: "block",
            margin: "0 auto 35px",
            objectFit: "contain",
            filter: "drop-shadow(0 0 18px rgba(155,114,207,.35))",
          }}
        />

        <h1 style={{ fontSize: "58px", marginBottom: "18px" }}>👋 Hey!</h1>

        <p style={{ fontSize: "19px", marginBottom: "22px" }}>
          Welcome! You&apos;ve discovered my portfolio.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.8", opacity: 0.85 }}>
          This portfolio contains selected client work shared exclusively for
          recruitment and professional review.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.8", opacity: 0.85 }}>
          If you&apos;d like to explore it, simply enter the password I shared
          with you. 🥰
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: "35px" }}>
          <div
            style={{
              position: "relative",
              animation: shake ? "shake 0.4s ease" : "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#777",
                fontSize: "16px",
              }}
            >
              <RiLockPasswordLine size={20} />
            </span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "18px 54px 18px 48px",
                borderRadius: "18px",
                border: focused ? "2px solid #9b72cf" : "2px solid transparent",
                background: "#fff",
                color: "#000",
                fontSize: "16px",
                outline: "none",
                marginBottom: "24px",
                boxShadow: focused
                  ? "0 0 22px rgba(155, 114, 207, 0.55)"
                  : "none",
                transition: "0.3s ease",
              }}
            />

         <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  style={{
    position: "absolute",
    right: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#777",
  }}
>
  {showPassword ? (
    <RiEyeOffLine size={20} />
  ) : (
    <RiEyeLine size={20} />
  )}
</button>
          </div>

          <button
            type="submit"
            disabled={loading}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: hovered ? "#b48ae8" : "#9b72cf",
              color: "#fff",
              padding: hovered ? "17px 42px" : "16px 38px",
              borderRadius: "999px",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "600",
              fontSize: "16px",
              opacity: loading ? 0.7 : 1,
              boxShadow: hovered
                ? "0 12px 35px rgba(155, 114, 207, 0.45)"
                : "0 8px 24px rgba(155, 114, 207, 0.25)",
              transition: "0.3s ease",
            }}
          >
{loading ? "Checking..." : "Let's Explore ✨"}
          </button>

          {error && (
            <p style={{ marginTop: "18px", color: "#ff8a8a" }}>{error}</p>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.28;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.12);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-7px);
          }
          50% {
            transform: translateX(7px);
          }
          75% {
            transform: translateX(-5px);
          }
        }
      `}</style>
    </main>
  );
}