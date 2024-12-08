"use client";

import React from "react";
import axios from "axios";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage: React.FC = () => {
  const handleSignup = async (username: string, email: string, password: string) => {
    console.log('Création de l\'utilisateur:', username, email, password);
    
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });

      console.log('Utilisateur créé:', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;
