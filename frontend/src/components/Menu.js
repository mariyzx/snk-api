import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <a href="https://snk-api-production-c1d2.up.railway.app/docs/" target="_blank" rel="noreferrer">Docs</a>
      <Link to="/characters">Characters</Link>
      <Link to="/titans">Titans</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Menu;