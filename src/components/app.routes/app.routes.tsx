import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Register = lazy(() => import('../../pages/register/register'));
const Login = lazy(() => import('../../pages/login/login'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
