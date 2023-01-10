import { useContext } from "react";
import { Context } from "../context/Context";
import { ListCharacters, MainCharacters } from "../styles/Characters";

function Characters() {
  const {chars} = useContext(Context);
  return (
    <MainCharacters>
      <h1>Characters</h1>
      <ListCharacters>
        { chars.map((a) => (
          <div key={a.id}>
            <img src={a.picture} alt="" />
            <p>Name: {a.name}</p>
            <p>Bio: {a.info}</p>
            <p>Height: {a.height}cm</p>
            <p>Weight: {a.weight}kg</p>
          </div>
        ))}
      </ListCharacters>
    </MainCharacters>
  )
}

export default Characters;