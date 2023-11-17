import TextInput from '../components/forms/TextInput';
import PasswordInput from '../components/forms/PasswordInput';
import Checkbox from '../components/forms/Checkbox';
import Button from '../components/forms/Button';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import '../styles/login.scss';

function Login() {
  const { handleLogin, handleInputChange, loginForm, formErrors } = useAuth();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin(navigate);
      }}
      className='login__container'
    >
      <legend className='login__title'>Iniciar sesión</legend>
      <fieldset className='login__form'>
        <TextInput
          label='Usuario'
          placeholder='Email o teléfono móvil'
          name={'username'}
          handleChange={handleInputChange}
          value={loginForm.username}
          error={formErrors?.username}
        />
        <PasswordInput
          label='Password'
          placeholder='Password'
          name={'password'}
          handleChange={handleInputChange}
          value={loginForm.password}
          error={formErrors?.password}
        />
        <Checkbox />
      </fieldset>
      <Button />
      <p className='text-link login__message'>¿Has olvidado tu contraseña?</p>
    </form>
  );
}

export default Login;
