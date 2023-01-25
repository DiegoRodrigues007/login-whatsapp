import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

// import * as C from "./styles";
import "../Signin/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import img from "../../img/Texting-bro.svg";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="Container">
      <img src={img} />
      <div className="Content">
        <div className="Label">LOGIN</div>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <div className="labelError">{error}</div>
        <Button Text="Entrar" onClick={handleLogin} />
        <div className="LabelSignup">
          <h2>Inscrever-se</h2>
          <p>
            Faça o login com os dados que você inseriu durante o seu registro.
          </p>
          <div className="strong">
            <Link to="/signup">&nbsp;Criar uma conta</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
