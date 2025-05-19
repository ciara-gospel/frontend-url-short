import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar';

function Header({ showNavbar = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isOnLoginPage = location.pathname === '/login';
  const isOnRegisterPage = location.pathname === '/register';

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <span role="img" aria-label="link">🔗</span> LinkShort
      </div>

      <div className="header-buttons">
        {showNavbar && <Navbar />}

        {isOnLoginPage && (
          <button onClick={() => navigate('/register')}>Register</button>
        )}

        {isOnRegisterPage && (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </header>
  );
}

export default Header;
