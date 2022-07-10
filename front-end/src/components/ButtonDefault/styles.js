import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: #009688;
  height: 50px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }

  span {
    color: #fff;
    font-size: 22px;
  }
`
