import React, { useEffect, useState } from 'react'
import { IconeOlhoAberto, IconeOlhoFechado } from '../../assets/icons'

import { Container } from './styles'

export default function InputDefault({ type, changeText, value, placeholder }) {
  const [eye, setEye] = useState('')

  function Icon() {
    return (
      <>
        {!eye ? <IconeOlhoFechado size={30} /> : <IconeOlhoAberto size={30} />}
      </>
    )
  }

  useEffect(() => {
    setEye(type)
  }, [type])

  function handleType() {
    if (eye) {
      setEye('')
    } else setEye('password')
  }

  return (
    <Container>
      <div className="containerInput">
        <input
          className="inputArea"
          type={eye}
          placeholder={placeholder}
          onChange={changeText}
          value={value}
        ></input>
        <div className="iconArea">
          {type === 'password' && (
            <a onClick={handleType}>
              <Icon />
            </a>
          )}
        </div>
      </div>
    </Container>
  )
}
