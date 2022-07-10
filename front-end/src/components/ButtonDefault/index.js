import React,{useEffect, useContext} from 'react'
import api from '../../services/api'
import { Container } from './styles'
import { AuthContext } from '../../contexts/authContext'

export default function ButtonDefault({ text, login, typeButton }) {

  const { getEmployee } = useContext(AuthContext)

  function handleType(){
    if(typeButton == 'login'){
      getEmployee(login.nome, login.senha)
    }
  }

  return (
    <Container onClick={handleType}>
      <span>{text}</span>
    </Container>
  )
}
