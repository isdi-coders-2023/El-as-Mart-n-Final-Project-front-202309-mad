import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import './user.buttons.scss';
import { makeImageURL } from '../../services/images';
import { Link } from 'react-router-dom';

export function UserButtons() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const userAvatar =
    loggedUser &&
    loggedUser.avatar &&
    makeImageURL(loggedUser?.avatar?.publicId, 50);

  const { logout } = useUsers();

  return (
    <section>
      {!loggedUser && (
        <>
          <Link to={'/register/'}>
            <button>Register</button>
          </Link>
          <Link to={'/login/'}>
            <button>Login</button>
          </Link>
        </>
      )}
      {loggedUser && (
        <>
          <button onClick={logout}>Logout</button>
          <p>Hola {loggedUser.name}</p>
          <img src={userAvatar!} alt={`imagen de ${loggedUser.name}`} />
        </>
      )}

      {/* Ruta protegida del admin */}
      {loggedUser && loggedUser.role === 'Admin' && <p>Cuenta Admin</p>}
    </section>
  );
}
