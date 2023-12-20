import { useUsers } from '../../hooks/users/use.users';

export function LogoutButton() {
  const { logout, loggedUser } = useUsers();

  return (
    <>
      {loggedUser && (
        <img
          onClick={logout}
          onKeyDown={logout}
          role="button"
          src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_40/v1701881309/elPerroVintage/ukkb4janmcl1yrz5y7ye.webp"
          alt="Logout icon"
        />
      )}
    </>
  );
}
