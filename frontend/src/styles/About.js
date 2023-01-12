import styled from "styled-components";

export const MainAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  text-align: center;

  div {
    width: 80%;
  }
`

export const ListAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3px;

  a {
    color: white;
  }
`