import Header from '../components/Header';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header showLoginButton={false} showNavbar={true} />
      <div className="home-container">

        <h1 className="welcome-text">Welcome to LinkShort 🎉</h1>
        <div className="instruction-row">
          <button
            className="arrow-register-button"
            onClick={() => navigate('/register')}
            title="Register"
          >
            <ArrowLeft size={24} />
          </button>
          <p className="instructions">
            LinkShort allows you to easily shorten your URLs. Once logged in, you can:
            <br /><br />
            • Go to the “Short” tab to paste your long URL and generate a short one.<br />
            • Click the generated link to be redirected.<br />
            • Visit “Statistics” to view all your shortened URLs with their click counts.
          </p>
        </div>

        <button className="start-button" onClick={() => navigate('/short')}>
          Start Shorten
        </button>
      </div>
    </>
  );
}
export default HomePage;
