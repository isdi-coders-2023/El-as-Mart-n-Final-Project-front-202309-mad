import './user.buttons.scss';
import { makeImageURL } from '../../services/images';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/use.users';

export function UserButtons() {
  const { loggedUser } = useUsers();

  const userAvatar =
    loggedUser?.avatar?.publicId &&
    makeImageURL(loggedUser.avatar.publicId, 50);

  return (
    <div className="user-buttons-container">
      {!loggedUser && (
        <Link to={'/login/'}>
          <img
            src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_50/v1701377671/elPerroVintage/nhlvlecz0fg1x7i0qtxy.png"
            alt="User login logo"
          />
        </Link>
      )}
      {loggedUser && (
        <img src={userAvatar!} alt={`imagen de ${loggedUser.name}`} />
      )}

      {/* Ruta protegida del admin */}
      {loggedUser && loggedUser.role === 'Admin' && (
        <Link
          to={'/admin/'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <p>Admin panel</p>
        </Link>
      )}
    </div>
  );
}
