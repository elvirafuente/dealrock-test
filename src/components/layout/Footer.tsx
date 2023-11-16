import '../../styles/footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <nav>
        <ul className='footer__menu'>
          <li>
            <a href='https://dealrock.com/' target='__blank'>
              Regístrate
            </a>
          </li>
          <li>
            <a href='https://dealrock.com/' target='__blank'>
              Aviso legal
            </a>
          </li>
          <li>
            <a href='https://dealrock.com/' target='__blank'>
              Privacidad
            </a>
          </li>
          <li>
            <a href='https://dealrock.com/' target='__blank'>
              Política de cookies
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
