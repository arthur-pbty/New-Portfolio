"use client";

import React, { useState } from "react";

interface SignupFormProps {
  onSubmit: (username: string, email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple
    if (!username || !email || !password) {
      setError("Tous les champs sont obligatoires !");
      return;
    }
    if (!email.includes("@")) {
      setError("L'adresse e-mail est invalide.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setError(""); // Réinitialiser les erreurs
    onSubmit(username, email, password); // Appeler la fonction onSubmit
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Inscription</h2>

      {/* Affichage des erreurs */}
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      {/* Champ nom d'utilisateur */}
      <div className="mb-4">
        <label 
          htmlFor="username" 
          className="block text-sm font-medium text-gray-700"
        >
          Nom d'utilisateur
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Entrez votre nom d'utilisateur"
        />
      </div>

      {/* Champ e-mail */}
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

      {/* Champ mot de passe */}
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

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        S'inscrire
      </button>
    </form>
  );
};

export default SignupForm;
