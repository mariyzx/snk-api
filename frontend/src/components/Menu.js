import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <a href="http://localhost:3333/docs" target="_blank" rel="noreferrer">Docs</a>
      <Link to="/characters">Characters</Link>
      <Link to="/titans">Titans</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Menu;