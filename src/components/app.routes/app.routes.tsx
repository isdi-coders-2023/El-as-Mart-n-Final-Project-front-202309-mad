import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../register/register';
import { Login } from '../login/login';

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
