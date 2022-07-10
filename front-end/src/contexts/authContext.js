import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'
import bcrypt from 'bcryptjs'

export const AuthContext = createContext({})


export default function AuthProvider({ children }) {

  const [userState, setUserState] = useState('')
  const [messageLogin, setMessageLogin] = useState()

  async function getEmployee(name, password){

    const response = await api.get('funcionarios')

    response.data.map((element)=>{

      if(element.name == name){
        if(!bcrypt.compare(password, element.password)){
          setMessageLogin('Senha incorreta')
        } else {
          setUserState(true)
        }
      } else {
        setMessageLogin('Usuário não encontrado')
      }
    })
  }

  return (
    <AuthContext.Provider value={{ 
      userState, 
      setUserState,
      getEmployee ,
      messageLogin
    }}>
      {children}
    </AuthContext.Provider>
  )
}
