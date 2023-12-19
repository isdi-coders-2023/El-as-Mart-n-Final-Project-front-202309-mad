import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';

describe('Given AppRoutes component', () => {
  describe('When we navigate to home page', () => {
    const MockedHomeComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock('../../pages/home/home', () => MockedHomeComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/home']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Home');
    });
    test('Then the Home (List) component should been called', () => {
      expect(MockedHomeComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to register page', () => {
    const MockedRegisterComponent = jest
      .fn()
      .mockReturnValue(<h1>Register</h1>);
    jest.mock('../../pages/register/register', () => MockedRegisterComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/register']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Register');
    });
    test('Then the Register component should been called', () => {
      expect(MockedRegisterComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to login page', () => {
    const MockedLoginComponent = jest.fn().mockReturnValue(<h1>Login</h1>);
    jest.mock('../../pages/login/login', () => MockedLoginComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/login']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Login');
    });
    test('Then the Login component should been called', () => {
      expect(MockedLoginComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to admin page', () => {
    const MockedAdminPanelComponent = jest
      .fn()
      .mockReturnValue(<h1>Admin Panel</h1>);
    jest.mock(
      '../../pages/admin.panel/admin.panel',
      () => MockedAdminPanelComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/admin']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Admin Panel');
    });
    test('Then the Admin panel component should been called', () => {
      expect(MockedAdminPanelComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to details page', () => {
    const MockedDetailsComponent = jest.fn().mockReturnValue(<h1>Details</h1>);
    jest.mock('../../pages/details/details', () => MockedDetailsComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/details/:id']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Details');
    });
    test('Then the Details component should been called', () => {
      expect(MockedDetailsComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to create page', () => {
    const MockedCreateClothingItemComponent = jest
      .fn()
      .mockReturnValue(<h1>Añadir Prenda</h1>);
    jest.mock(
      '../../pages/create.clothingItem/create.clothingItem',
      () => MockedCreateClothingItemComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/create']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Añadir Prenda');
    });
    test('Then the CreateClothingItem component should been called', () => {
      expect(MockedCreateClothingItemComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to update page', () => {
    const MockedUpdateClothingItemComponent = jest
      .fn()
      .mockReturnValue(<h1>Editar Prenda</h1>);
    jest.mock(
      '../../pages/update.clothingItem/update.clothingItem',
      () => MockedUpdateClothingItemComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/update']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Editar Prenda');
    });
    test('Then the UpdateClothingItem component should been called', () => {
      expect(MockedUpdateClothingItemComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to About Us page', () => {
    const MockedAboutUsComponent = jest
      .fn()
      .mockReturnValue(<h1>Conócenos</h1>);
    jest.mock('../../pages/about.us/about.us', () => MockedAboutUsComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/aboutUs']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Conócenos');
    });
    test('Then the AbputUs component should been called', () => {
      expect(MockedAboutUsComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to Error page', () => {
    const MockedErrorComponent = jest.fn().mockReturnValue(<h1>Error</h1>);
    jest.mock('../../pages/error/error', () => MockedErrorComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/*']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Error');
    });
    test('Then the Error component should been called', () => {
      expect(MockedErrorComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to Not Implemented page', () => {
    const MockedNotImplementedComponent = jest
      .fn()
      .mockReturnValue(<h1>Not Implemented</h1>);
    jest.mock(
      '../../pages/not.implemented/not.implemented',
      () => MockedNotImplementedComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/notImplemented']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Not Implemented');
    });
    test('Then the Not Implemented component should been called', () => {
      expect(MockedNotImplementedComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
