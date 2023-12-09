import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';

describe('Given AppRoutes component', () => {
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
});
