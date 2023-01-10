import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/docs">Docs</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/titans">Titans</Link>
      <Link to="/about">About me</Link>
    </div>
  )
}

export default Menu;