import styled from "styled-components";

export const MainCharacters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ListCharacters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 30%;
    margin: 10px;
    text-align: center;
  }
`