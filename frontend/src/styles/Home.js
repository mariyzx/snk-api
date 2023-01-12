import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 1rem;

  div {
    width: 100%;
  }

  h1 {
    width: 100%;
	  animation: focus-in-contract 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  footer {
    bottom: 10px;
    position: absolute;
  }

  div > a {
    text-decoration: none;
    font-weight: bold;
    color: lightgrey;
    margin: 5px;
  }

  // animista

  @keyframes focus-in-contract {
    0% {
      letter-spacing: 0.4em;
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

  @media (max-width: 500px) {
      flex-direction: column;
      gap: 4rem;

      div:nth-child(2) {
        display: flex;
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
