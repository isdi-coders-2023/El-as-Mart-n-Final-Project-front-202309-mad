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
const UpdateClothingItem = lazy(
  () => import('../../pages/update.clothingItem/update.clothingItem')
);
const ErrorComponent = lazy(() => import('../../pages/error/error'));
const AboutUs = lazy(() => import('../../pages/about.us/about.us'));
const NotImplemented = lazy(
  () => import('../../pages/not.implemented/not.implemented')
);

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route
            path="/create"
            element={<CreateClothingItem></CreateClothingItem>}
          ></Route>
          <Route
            path="/update"
            element={<UpdateClothingItem></UpdateClothingItem>}
          ></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/notImplemented"
            element={<NotImplemented></NotImplemented>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
