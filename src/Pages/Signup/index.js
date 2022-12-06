import React, { useState } from "react"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import * as SignUpStyle from "./style"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/UseAuth"

function Signup() {
  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos")
      return
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais")
      return
    }

    const res = signup(email, senha)

    if (res) {
      setError(res)
      return
    }

    alert("Usuário cadatrado com sucesso!")
    navigate("/")
  }

  return (
    <SignUpStyle.Container>
      <SignUpStyle.Label>Cadastre-se em nosso sistema</SignUpStyle.Label>
      <SignUpStyle.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <SignUpStyle.labelError>{error}</SignUpStyle.labelError>
        <Button text="Inscrever-se" onClick={handleSignup} />
        <SignUpStyle.LabelSignin>
          Já tem uma conta?
          <SignUpStyle.Strong>
            <Link to="/signin">&nbsp;Entre</Link>
          </SignUpStyle.Strong>
        </SignUpStyle.LabelSignin>
      </SignUpStyle.Content>
    </SignUpStyle.Container>
  );
};

export default Signup;