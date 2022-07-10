import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import ListaConsulta from '../pages/ListaConsulta'
import CadastraConsulta from '../pages/ListaConsulta'

import { AuthContext } from '../contexts/authContext'


export default function AuthRoutes() {
  const {userState} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/lista" element={<ListaConsulta />} />
        <Route path="/cadastra" element={<CadastraConsulta />} />

        
      </Routes>
    </BrowserRouter>
  )
}
