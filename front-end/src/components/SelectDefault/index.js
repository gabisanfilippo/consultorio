import Select from 'react-select'
import React from 'react'

import { Container } from './styles'

export default function SelectDefault({ change, options }) {

  const customStyles = {
    control: provided => ({
      ...provided,
      height: 50,
      boxShadow: 'none',
      cursor: 'pointer',

      '&:hover': {
        border: '2px solid #009688'
      }
    })
  }

  return (
    <Container>
      <Select
        placeholder={'Selecionar'}
        width="300px"
        styles={customStyles}
        options={options}
        onChange={e => {
          change(e.value)
        }}
      />
    </Container>
  )
}
