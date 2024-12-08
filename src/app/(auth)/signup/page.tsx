"use client";

import React, { useState } from "react";
import axios from "axios";
import SignupForm from "@/components/auth/SignupForm";

const SignupPage: React.FC = () => {
  const [error, setError] = useState("");

  const handleSignup = async (username: string, email: string, password: string) => {
    
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });

      // Redirect to home page
      window.location.href = "/";
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "Username already taken") {
          setError("Le nom d'utilisateur est déjà pris.");
        } else if (error.response.data.error === "Email already taken") {
          setError("L'adresse e-mail est déjà utilisée.");
        } else {
          setError("Une erreur s'est produite lors de la création de l'utilisateur.");
        }
      } else {
        setError("Une erreur s'est produite lors de la création de l'utilisateur.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignupForm onSubmit={handleSignup} error={error} setError={setError} />
    </div>
  );
};

export default SignupPage;
