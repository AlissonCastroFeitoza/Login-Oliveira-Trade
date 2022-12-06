import { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

function UseAuth(){
  const context = useContext(AuthContext)

  return context
}

export default UseAuth