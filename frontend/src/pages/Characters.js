import { useContext } from "react";
import { Context } from "../context/Context";
import { List, Main } from "../styles/Info";

function Characters() {
  const {chars} = useContext(Context);
  return (
    <Main>
      <h1>Characters</h1>
      <List>
        { chars.map((a) => (
          <div key={a.id}>
            <img src={a.picture} alt="" />
            <p>Name: {a.name}</p>
            <p>Bio: {a.info}</p>
            <p>Height: {a.height}cm</p>
            <p>Weight: {a.weight}kg</p>
          </div>
        ))}
      </List>
    </Main>
  )
}

export default Characters;