import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserButtons } from './user.buttons';
import { useUsers } from '../../hooks/users/use.users';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { User } from '../../entities/user';

jest.mock('../../hooks/users/use.users', () => ({
  useUsers: jest.fn(),
  loggedUser: { name: 'NameTest', avatar: { publicId: '1' } },
}));

describe('Given UserButtons Component', () => {
  describe('When an user is not logged', () => {
    test('Then should renders login button ', () => {
      (useUsers as jest.Mock).mockReturnValue({
        loggedUser: null,
        logout: jest.fn(),
      });
      render(
        <Router>
          <Provider store={appStore}>
            <UserButtons />
          </Provider>
        </Router>
      );
      expect(screen.getByAltText('User login logo')).toBeInTheDocument();
    });
  });

  describe('When an user is correctyle logged', () => {
    beforeEach(() => {
      (useUsers as jest.Mock).mockReturnValue({
        loggedUser: {
          name: 'TestName',
          img: '',
          role: 'Admin',
          avatar: { publicId: '1' },
        } as unknown as User,
        logout: jest.fn(),
      });
      render(
        <Router>
          <Provider store={appStore}>
            <UserButtons />
          </Provider>
        </Router>
      );
    });
    test('Then sould render the logged user avatar', () => {
      const avatarLogin = screen.getByRole('img');
      expect(avatarLogin).toBeInTheDocument();
    });
    test('Then sould render the logged user avatar with the correct URL', () => {
      const makeImageURL = jest.fn().mockReturnValue('');
      const userAvatar = screen.getByRole('img');
      expect(makeImageURL).toHaveBeenCalled;
      expect(userAvatar).toBeInTheDocument();
    });
    test('Then should render the Admin panel when the role User is Admin', () => {
      const adminPanel = screen.getByText('Admin panel');
      expect(adminPanel).toBeInTheDocument();
    });
  });
});
