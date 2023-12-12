import { Link } from 'react-router-dom';
import { UserButtons } from '../user.buttons/user.buttons';
import './header.scss';
import { LogoutButton } from '../logout.button/logout.button';
import Marquee from 'react-fast-marquee';

export function Header() {
  return (
    <header>
      <div className="header-marquee-top-container">
        <Marquee>10% DE DESCUENTO SI DEJAS TU OPINIÓN SOBRE LA TIENDA</Marquee>
      </div>
      <div className="header-login-and-mainlogo-container">
        <div className="header-user-buttons-container">
          <UserButtons></UserButtons>
        </div>
        <div className="header-mainlogo-container">
          <Link
            to={'/home'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_120/v1701878572/elPerroVintage/mvejhq8vz3pwhejxztrf.png"
              alt="El Perro Vintage Logo"
            />
          </Link>
        </div>
        <div className="header-logout-container">
          <LogoutButton></LogoutButton>
        </div>
      </div>
      <div className="header-marquee-bottom-container">
        🔥 ESTATE ATENTO A NUESTRO ÚLTIMO DROP 🔥
      </div>
    </header>
  );
}
