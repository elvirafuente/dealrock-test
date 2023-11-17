import PublicContent from './header/PublicContent';
import PrivateContent from './header/PrivateContent';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/dealrock-logo.svg';
import '../../styles/header.scss';

function Header() {
  const { isAuthenticated } = useAuth();
  return (
    <header className='header'>
      <a href='https://dealrock.com/' target='__blank'>
        <img src={logo} alt='dealrock logo' className='header__logo' />
      </a>
      {isAuthenticated ? <PrivateContent /> : <PublicContent />}
    </header>
  );
}

export default Header;
