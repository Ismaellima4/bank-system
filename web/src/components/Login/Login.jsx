"use client";

import React, { useState } from "react";
import { hashPassword, verifyPassword } from "@/app/utils/crypto";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const hashedPassword = await hashPassword(password);

      console.log("Senha criptografada:", hashedPassword);

      const isValid = await verifyPassword(password, hashedPassword);
      console.log("Senha verificada:", isValid);

      if (isValid) {
        alert("Login realizado com sucesso!");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro no login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Digite seu usuário"
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
