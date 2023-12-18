import { useEffect } from 'react';
import { AppRoutes } from '../app.routes/app.routes';
import { useUsers } from '../../hooks/users/use.users';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
