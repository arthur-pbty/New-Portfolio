"use client";

import React, { useState } from "react";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  error: string;
  setError: (message: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Tous les champs sont obligatoires !");
      return;
    }
    if (!email.includes("@")) {
      setError("L'adresse e-mail est invalide.");
      return;
    }

    setError("");
    onSubmit(email, password);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Connexion</h2>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      <div className="mb-4">
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-gray-700"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Entrez votre e-mail"
        />
      </div>

      <div className="mb-4">
        <label 
          htmlFor="password" 
          className="block text-sm font-medium text-gray-700"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Entrez votre mot de passe"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Se connecter
      </button>
    </form>
  );
};

export default LoginForm;
