import logo from '../../assets/dealrock-logo.svg';

interface HeaderProps {
  children?: React.ReactNode;
}

function Header(props: HeaderProps) {
  const { children } = props;
  return (
    <header>
      <img src={logo} alt='dealrock logo' />
      header
      {children}
    </header>
  );
}

export default Header;
