
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-item">Home</NavLink>
      <NavLink to="/short" className="nav-item">Short</NavLink>
      <NavLink to="/statistics" className="nav-item">Statistics</NavLink>
    </nav>
  );
}

export default Navbar;
