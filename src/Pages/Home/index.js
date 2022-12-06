import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import useAuth from '../../Hooks/UseAuth'
import * as HomeStyle from './style'

function Home() {
  const { signout } = useAuth()
  const navigate = useNavigate()

  return (
    <HomeStyle.Container>
      <HomeStyle.Title>Seja bem vindo(a) ao sistema da Oliveira Trade!</HomeStyle.Title>
      <Button text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </HomeStyle.Container>
  )
}

export default Home