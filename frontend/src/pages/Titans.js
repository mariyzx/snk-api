import { useContext } from "react";
import { Context } from "../context/Context";
import { List, Main } from "../styles/Info";

function Titans() {
  const {titans} = useContext(Context);
  return(
    <Main>
      <h1>Titans</h1>
      <List>
        {titans.map((a) => (
          <div key={a.id}>
            <img src={a.picture} alt="" />
            <p>Name: {a.name}</p>
            <p>Bio: {a.description}</p>
            <p>Height: {a.height}m</p>
          </div>
        ))}
      </List>
    </Main>
  )
}

export default Titans;