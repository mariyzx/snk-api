import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  height: 100vh;

  div > a {
    text-decoration: none;
    font-weight: bold;
    margin: 1rem;
  }

  footer {
    bottom: 10px;
    position: absolute;
  }
`
