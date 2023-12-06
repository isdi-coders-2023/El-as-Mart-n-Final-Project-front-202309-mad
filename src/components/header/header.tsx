import { Link } from 'react-router-dom';
import { UserButtons } from '../user.buttons/user.buttons';
import './header.scss';

export function Header() {
  return (
    <header>
      <Link to={'/home/'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>El Perro Vintage</h1>
      </Link>
      <UserButtons></UserButtons>
    </header>
  );
}
