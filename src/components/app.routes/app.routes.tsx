import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Register = lazy(() => import('../../pages/register/register'));
const Login = lazy(() => import('../../pages/login/login'));
const AdminPanel = lazy(() => import('../../pages/admin.panel/admin.panel'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
