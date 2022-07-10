import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './styles'
import InputDefault from '../../components/InputDefault'
import SelectDefault from '../../components/SelectDefault'
import ButtonDefault from '../../components/ButtonDefault'
import { AuthContext } from '../../contexts/authContext'
export default function Login() {
  const {messageLogin, userState} = useContext(AuthContext)

  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [userType, setUserType] = useState('')
  const [login, setLogin] = useState({nome: nome, senha: senha})

  const navigate = useNavigate()

  useEffect(()=>{
    handleUser()
  },[userState])

  function handleUser(){
    if(userState){
      navigate('/lista', { replace: true })
    }
  }


  return (
    <Container>
      <div className="areaInput">
        <h3>Digite o seu Nome</h3>
        <InputDefault
          placeholder={'ex: Gabrielle'}
          type={'text'}
          changeText={value => {
            setNome(value.target.value)
            setLogin({nome: nome, senha: senha})
          }}
          value={nome}
        />
        <h3>Digite a sua senha</h3>
        <InputDefault
          placeholder={'************'}
          type={'password'}
          changeText={value => {
            setSenha(value.target.value)
            setLogin({nome: nome, senha: senha})
          }}
          value={senha}
        />
        <div style={{ marginTop: '22px' }}>
          <ButtonDefault
            typeButton={'login'}
            text={'Entrar'}
            login={login}
          />
        </div>
        <div className="cadastro">
          <a href='/cadastro'>Não tem Login? Cadastre-se</a>
        </div>
        {messageLogin && (<div><p>{messageLogin}</p></div>)}
      </div>
    </Container>
  )
}
