// LoginModal.js
import React, { useState } from "react";
import { Typography, TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../auth";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "123456") {
      setToken("fake-jwt-token-123");
      onClose();
      navigate("/protected");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <ModalWrapper open={isOpen} onClose={onClose}>
      <Typography variant="h6" mb={2}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="contained" color="primary" type="submit">
              Entrar
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Cancelar
            </Button>
          </Stack>
        </Stack>
      </form>
    </ModalWrapper>
  );
};

export default LoginModal;
