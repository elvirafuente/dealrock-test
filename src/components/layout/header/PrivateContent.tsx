import NavigationMenu from './NavigationMenu';
import UserMenu from './UserMenu';

function PrivateContent() {
  return (
    <div className='header__private-content'>
      <NavigationMenu />
      <UserMenu />
    </div>
  );
}

export default PrivateContent;
