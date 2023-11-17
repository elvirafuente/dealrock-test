interface Props {
  children: React.ReactNode;
}
function UserMenuButton({ children }: Props) {
  return <button className='user-menu__button'>{children}</button>;
}

export default UserMenuButton;
