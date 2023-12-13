import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { useUsers } from '../../hooks/users/use.users';
import { LogoutButton } from './logout.button';

jest.mock('../../hooks/users/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    logout: jest.fn(),
    loggedUser: { name: 'NameTest' },
  }),
}));
describe('Given Logout Component', () => {
  describe('When LogoutButton is render', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={appStore}>
            <LogoutButton />
          </Provider>
        </Router>
      );
    });

    test('Then should triggers logout function on click', async () => {
      const logoutButton = screen.getByRole('button');
      expect(logoutButton).toBeInTheDocument();
      await userEvent.click(logoutButton);
      expect(useUsers().logout).toHaveBeenCalled();
    });
  });
});
