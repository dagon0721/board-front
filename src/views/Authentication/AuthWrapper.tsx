import React, { useEffect, useState, ReactNode } from "react";
import "./style.css";

interface AuthWrapperProps {
  children: ReactNode; // children prop 추가
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const images = [
      "/auth-bg/auth_background1.png",
      "/auth-bg/auth_background2.png",
      "/auth-bg/auth_background3.png",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  }, []);

  return (
    <div
      id="auth-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
