import { createContext, ReactNode, useState } from 'react';
import { login } from '../services/services';
import { UserLogin } from '../types';
import { NavigateFunction } from 'react-router';

interface AuthContextProps {
  isAuthenticated: boolean;
  loginForm: LoginForm;
  handleLogin: (navigate: NavigateFunction) => void;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formErrors: Partial<UserLogin> | null;
  isLoading: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface LoginForm extends UserLogin {
  remember: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: 'agezuraga@dealrock.com',
    password: 'Prueba1+',
    remember: false,
  });

  const [formErrors, setFormErrors] = useState<Partial<UserLogin> | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    const newState = {
      ...loginForm,
      [name]: value,
    };
    setLoginForm(newState);

    if (formErrors) {
      handleValidation(newState);
    }
  };

  const handleValidation = (data = loginForm) => {
    setFormErrors(null);
    const newErrors: Partial<UserLogin> = {};
    const message = 'Este campo es obligatorio';
    if (!data.username) {
      newErrors.username = message;
    }
    if (!data.password) {
      newErrors.password = message;
    }
    setFormErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleLogin = (navigate: NavigateFunction) => {
    setFormErrors(null);
    const isValidated = handleValidation();

    if (isValidated) {
      setIsLoading(true);
      const userData = {
        username: loginForm.username,
        password: loginForm.password,
      };
      login(userData)
        .then((res) => {
          if (res.status === 200) {
            setIsAuthenticated(true);
            navigate('/');
          }
        })
        .catch((error) => {
          console.log(error);
          if (
            error?.response?.status === 404 ||
            error?.response?.status === 401
          ) {
            const message = 'Username or password is incorrect';
            setFormErrors({
              username: message,
              password: message,
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleInputChange,
        loginForm,
        formErrors,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
