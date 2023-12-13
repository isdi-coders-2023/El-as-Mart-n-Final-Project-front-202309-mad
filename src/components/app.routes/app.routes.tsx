import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home/home'));
const Register = lazy(() => import('../../pages/register/register'));
const Login = lazy(() => import('../../pages/login/login'));
const AdminPanel = lazy(() => import('../../pages/admin.panel/admin.panel'));
const Details = lazy(() => import('../../pages/details/details'));
const CreateClothingItem = lazy(
  () => import('../../pages/create.clothingItem/create.clothingItem')
);

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route
            path="/create"
            element={<CreateClothingItem></CreateClothingItem>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
