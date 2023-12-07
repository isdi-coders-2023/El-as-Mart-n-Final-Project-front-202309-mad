import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './user.buttons.scss';
import { makeImageURL } from '../../services/images';
import { Link } from 'react-router-dom';

export function UserButtons() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const userAvatar =
    loggedUser &&
    loggedUser.avatar &&
    makeImageURL(loggedUser?.avatar?.publicId, 50);

  return (
    <div className="user-buttons-container">
      {!loggedUser && (
        <>
          <Link to={'/login/'}>
            <img
              src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_50/v1701377671/elPerroVintage/nhlvlecz0fg1x7i0qtxy.png"
              alt="User login logo"
            />
          </Link>
        </>
      )}
      {loggedUser && (
        <>
          <img src={userAvatar!} alt={`imagen de ${loggedUser.name}`} />
        </>
      )}

      {/* Ruta protegida del admin */}
      {loggedUser && loggedUser.role === 'Admin' && <p>Admin panel</p>}
    </div>
  );
}
