import TextField from '@mui/material/TextField';
import TextInput from '../forms/TextInput';
import { useAuth } from '../../hooks/useAuth';

function LoginForm() {
  const { handleLogin } = useAuth();

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin();
      }}
    >
      <TextInput />
      <TextField id='filled-basic' label='Filled' variant='filled' />
      <fieldset>
        <legend>Iniciar sesión</legend>
        <label htmlFor='email' placeholder='Email o teléfono móvil'>
          Email
        </label>
        <input type='email' name='email' />
        <label htmlFor='password' placeholder='Contraseña'>
          Contraseña
        </label>
        <input type='password' name='password' />
        <input type='checkbox' name='remember' />
        <label htmlFor='remember'>Recuérdame</label>
      </fieldset>
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
