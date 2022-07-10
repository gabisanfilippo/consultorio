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

    .cadastro {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 4px;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        transition: all 0.2s;
        transform: scale(1.1);
      }

      a {
        font-size: 14px;
        font-weight: 400;
        color: #009688;
      }
    }

    h3 {
      font-size: 22px;
      font-weight: 400;
      color: #009688;
    }
  }
`
