import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar';

function Header({ showLoginButton = true, showRegisterButton = false, showNavbar = false }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <span role="img" aria-label="link">🔗</span> LinkShort
      </div>
      <div className="header-buttons">
        {showNavbar && <Navbar />}
        {showRegisterButton && (
          <button onClick={() => navigate('/register')}>Register</button>
        )}
        {showLoginButton && (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </header>
  );
}

export default Header;
