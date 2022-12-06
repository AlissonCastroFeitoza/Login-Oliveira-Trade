import {useState} from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import * as StyleSignIn from './style'
import { Link, useNavigate } from 'react-router-dom'
import {HiUserCircle} from 'react-icons/hi'
import useAuth from '../../Hooks/UseAuth'

function SignIn () {
    const { signin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")
      
    const LoginTest = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos")
            return
          }
      
          const res = signin(email, senha)
      
          if (res) {
            setError(res)
            return
          }
      
          navigate("/home")
    }
    return (
        <StyleSignIn.Container>
        <StyleSignIn.Label>Olá, Bem vindo(a) ao sistema da Oliveira Trade </StyleSignIn.Label>
        <StyleSignIn.Content> 
        <StyleSignIn.LogoForm><HiUserCircle/></StyleSignIn.LogoForm>
            <Input type="email" placeholder='Digite seu E-mail' value={email} onChange={(e)=> [setEmail(e.target.value),setError("")]} />
            <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e)=> [setSenha(e.target.value),setError("")]} />
            <StyleSignIn.LabelError>{error}</StyleSignIn.LabelError>
            <Button text='Entrar' onClick={LoginTest} />
            <StyleSignIn.LabelSignup>
                Não tem uma conta ? <StyleSignIn.Strong><Link to='/signup'>&nbsp;Registre-se</Link></StyleSignIn.Strong>
            </StyleSignIn.LabelSignup>
        </StyleSignIn.Content>
        </StyleSignIn.Container>
    )
}

export default SignIn
