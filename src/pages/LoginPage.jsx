import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <>
      <Header />
      <div className="page-container">
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
