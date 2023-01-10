import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  height: 100vh;

  h1 {
    -webkit-animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  div > a {
    text-decoration: none;
    font-weight: bold;
    margin: 1rem;
    color: lightgrey;
  }

  footer {
    bottom: 10px;
    position: absolute;
  }

  // animista

  @-webkit-keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
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

  @keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
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

`
