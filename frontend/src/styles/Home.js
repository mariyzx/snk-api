import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 1rem;

  h1 {
    width: 100%;
    font-size: 50px;
	  animation: focus-in-contract 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  footer {
    bottom: 10px;
    position: absolute;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: lightgrey;
    margin: 5px;
  }
  
  a:hover {
    color: white;
  }

  // animista
  @keyframes focus-in-contract {
    0% {
      letter-spacing: 2px;
      -webkit-filter: blur(12px);
              filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
      flex-direction: column;
      gap: 4rem;

      div:nth-child(1) {
        width: 90%;
      }

      div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
      }
  }

  @media (max-width: 285px) {
    div:nth-child(2) {
      flex-direction: column;
    }
  }
`

export const FirstIntro = styled.div`
  width: 50%;
`
