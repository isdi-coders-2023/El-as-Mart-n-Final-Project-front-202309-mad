import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Details } from './details';
import { appStore } from '../../store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { useUsers } from '../../hooks/users/use.users';
import { User } from '../../entities/user';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    currentClothingItem: {
      name: 'Test',
      clothingItemFrontImg: { publicId: '1' },
      clothingItemBackImg: { publicId: '1' },
    },
    deleteClothingItem: jest.fn(),
  }),
}));

jest.mock('../../hooks/users/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: {
      name: 'Test',
      role: 'User',
    },
  }),
}));

jest.mock('../../services/images', () => ({
  makeImageURL: jest.fn(),
}));

describe('Given Details Component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Details></Details>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then should render correctly', () => {
      const result = screen.getByText(/Talla/i);
      expect(result).toBeInTheDocument();
    });
    test('Then should handle small image click', async () => {
      const frontImage = screen.getAllByTestId('small-image-front');
      await userEvent.click(frontImage[0]);
      const backImage = screen.getAllByTestId('small-image-back');
      await userEvent.click(backImage[0]);
    });
    test('Then should handle small image click', async () => {
      const frontImage = screen.getAllByTestId('small-image-front');
      await userEvent.click(frontImage[1]);
      const backImage = screen.getAllByTestId('small-image-back');
      await userEvent.click(backImage[1]);
    });
    test('Then should render the shopping cart button', async () => {
      const shoppingCart = screen.getByAltText('Icono de carrito de compra');
      expect(shoppingCart).toBeInTheDocument();
    });
  });
  describe('When the user has the role Admin', () => {
    beforeEach(() => {
      useUsers().loggedUser = { name: 'Test', role: 'Admin' } as User;
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Details></Details>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then should render edit and delete buttons', () => {
      const deleteButton = screen.getByText('🗑️');
      expect(deleteButton).toBeInTheDocument();
      const editButton = screen.getByText('✏️');
      expect(editButton).toBeInTheDocument();
    });
    test('Then delete button should call handleDelete when is clicked', async () => {
      let deleteButton = screen.getByText('🗑️');
      await userEvent.click(deleteButton);
      const confirmButton = screen.getByTestId('confirm-button');
      await userEvent.click(confirmButton);
      deleteButton = screen.getByText('🗑️');
      await userEvent.click(deleteButton);
      const negateButton = screen.getByTestId('negate-button');
      await userEvent.click(negateButton);
    });
  });
});
