import { createContext, ReactNode, useState } from 'react';
import { login } from '../services/services';
import { UserLogin } from '../types';

interface AuthContextProps {
  isAuthenticated: boolean;
  handleLogin: () => void;
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
    username: '',
    password: '',
    remember: false,
  });

  const handleLogin = () => {
    setIsLoading(true);
    const userData = {
      username: loginForm.username,
      password: loginForm.password,
    };
    login(userData)
      .then((res) => {
        console.log({ res });
      })
      .catch((error) => {
        console.log({ error });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
