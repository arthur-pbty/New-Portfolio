"use client";

import React from "react";
import axios from "axios";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage: React.FC = () => {
  const handleLogin = async (email: string, password: string) => {
    console.log('Connexion de l\'utilisateur:', email, password);
    
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      console.log('Utilisateur connecté:', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
