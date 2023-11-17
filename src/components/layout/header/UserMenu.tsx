import { useUser } from '../../../hooks/useUser';
import UserMenuButton from './UserMenuButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function UsernMenu() {
  const { userInfo, isLoading } = useUser();
  return (
    <nav>
      <ul className='header__menu-user'>
        <li>
          <UserMenuButton>
            <NotificationsNoneIcon />
          </UserMenuButton>
        </li>
        <li>
          <UserMenuButton>
            <SearchIcon />
          </UserMenuButton>
        </li>
        <li>
          <UserMenuButton>
            <HelpOutlineIcon />
          </UserMenuButton>
        </li>
        {!isLoading && (
          <li className='user-item__container'>
            <UserMenuButton>
              <object
                className='user-menu__button user_avatar'
                data='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                type='image/png'
              >
                <img
                  className='user-menu__button user_avatar'
                  src={'https://dealrock.com/' + userInfo?.avatar}
                  alt={userInfo?.full_name}
                />
              </object>
            </UserMenuButton>
            <div>
              <p className='user_fullname'>{userInfo?.full_name}</p>
              <p className='user_username'>{userInfo?.username}</p>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default UsernMenu;
