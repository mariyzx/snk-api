import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 5px;

  div {
    min-height: min-content;
    width: 45%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 550px;
    gap: 0.3rem;
  }

  img {
    width: 200px;
  }

  img:hover {
    box-shadow: 3px 3px 5px 0px rgba(173,168,173,1);
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }
  
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: max-content;
    }
  }
`

