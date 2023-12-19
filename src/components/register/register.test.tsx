import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { Register } from './register';
import { useUsers } from '../../hooks/users/use.users';
import '@testing-library/jest-dom';

jest.mock('../../hooks/users/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    register: jest.fn(),
  }),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({}),
}));

describe('Given Register Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={appStore}>
          <Register />
        </Provider>
      </Router>
    );
  });

  describe('When the user submits the form with correct values', () => {
    test('Then it calls the register function with the correct values', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'test@example.com');
      await fireEvent.submit(form);
      expect(useUsers().register).toHaveBeenCalled();
    });
    test('Then it updates the selectedFileName state', async () => {
      const fileInput = screen.getByTestId('file-input');
      expect(fileInput).toBeInTheDocument();
      const fileName = 'test-file.png';
      await userEvent.upload(
        fileInput,
        new File(['(⌐□_□)'], fileName, { type: 'image.png' })
      );
      const selectedFileName = screen.getByText(fileName);
      expect(selectedFileName).toBeInTheDocument();
    });
  });
});
