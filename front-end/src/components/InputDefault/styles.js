import styled from 'styled-components'

export const Container = styled.div`
  .containerInput {
    position: relative;
  }

  .iconArea {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 10px;
    margin-right: 20px;

    a {
      cursor: pointer;
    }
  }

  .inputArea {
    width: 400px;
    height: 50px;
    background-color: #fff;
    border: none;
    outline: none;
    font-size: 18px;
    color: #009688;
    padding-left: 12px;
    border-radius: 4px;

    &:hover {
      transform: scale(1.05);
      transition: all 0.2s;
      border: 2px solid #009688;
    }
  }
`
