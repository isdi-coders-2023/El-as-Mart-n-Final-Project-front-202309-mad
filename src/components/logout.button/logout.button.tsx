import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/use.users';

export function LogoutButton() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const { logout } = useUsers();

  return (
    <>
      {loggedUser && (
        <img
          onClick={logout}
          role="button"
          src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_40/v1701881309/elPerroVintage/ukkb4janmcl1yrz5y7ye.png"
          alt=""
        />
      )}
    </>
  );
}
