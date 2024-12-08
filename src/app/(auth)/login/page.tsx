"use client";

import React, { useState } from "react";
import axios from "axios";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");

  const handleLogin = async (email: string, password: string) => {
    
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      setError(""); // Reset errors
      // Redirect to home page
      window.location.href = "/";
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("L'adresse e-mail ou le mot de passe est incorrect.");
      } else {
        setError("Une erreur s'est produite lors de la connexion.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onSubmit={handleLogin} error={error} setError={setError} />
    </div>
  );
};

export default LoginPage;
