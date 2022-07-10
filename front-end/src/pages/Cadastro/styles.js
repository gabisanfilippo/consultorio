import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #1212;
  align-items: center;
  justify-content: center;

  .areaInput {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 22px;
      font-weight: 400;
      color: #009688;
    }
  }
`
