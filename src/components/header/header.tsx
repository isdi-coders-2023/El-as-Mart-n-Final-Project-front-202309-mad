import { Link } from 'react-router-dom';
import { UserButtons } from '../user.buttons/user.buttons';
import './header.scss';

export function Header() {
  return (
    <header>
      <div className="header-marquee-top-container">
        10% DE DESCUENTO SI DEJAS TU OPINIÓN SOBRE LA TIENDA
      </div>
      <div className="header-login-mainlogo-container">
        <div className="header-login-container">
          <UserButtons></UserButtons>
        </div>

        <Link
          to={'/home/'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <img
            src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_120/v1701878572/elPerroVintage/mvejhq8vz3pwhejxztrf.png"
            alt="El Perro Vintage Logo"
          />
        </Link>
        <div className="header-logout-container"></div>
      </div>
      <div className="header-marquee-bottom-container">
        🔥 ESTATE ATENTO A NUESTRO ÚLTIMO DROP 🔥
      </div>
    </header>
  );
}
