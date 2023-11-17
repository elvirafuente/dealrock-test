function NavigationMenu() {
  const links = [
    'Inicio',
    'Materiales',
    'Oportunidades',
    'Usuarios',
    'Herramientas',
    'Actividad',
  ];
  return (
    <nav>
      <ul className='header__menu-navigation'>
        {links.map((link) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
