import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <>
      <Header showLoginButton={true} />
      <RegisterForm />
    </>
  );
}

export default RegisterPage;
