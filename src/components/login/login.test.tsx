import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { Login } from './login';
import { useUsers } from '../../hooks/users/use.users';
import '@testing-library/jest-dom';

jest.mock('../../hooks/users/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    login: jest.fn(),
  }),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({}),
}));

describe('Given Login Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={appStore}>
          <Login />
        </Provider>
      </Router>
    );
  });

  describe('When the user submits the form with correct values', () => {
    test('Then it calls the login function with the correct values', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'test@example.com');
      await userEvent.click(screen.getByText('INGRESAR CUENTA'));
      await fireEvent.submit(form);
      expect(useUsers().login).toHaveBeenCalled();
    });
    test('Then the show passwd should change the input type', async () => {
      const showPasswdButton = screen.getByTestId('show-passwd-button');
      await userEvent.click(showPasswdButton);
    });
  });
});
