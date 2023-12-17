import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { UpdateClothingItem } from './update.clothingItem';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { ClothingItem } from '../../entities/clothingItem';
import '@testing-library/jest-dom';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    currentClothingItem: {
      id: '',
      name: '',
      size: '',
      price: '',
      clothingItemHeight: '',
      clothingItemWidth: '',
      tares: '',
    } as ClothingItem,
    updateClothingItem: jest.fn(),
  }),
}));

describe('Given UpdateClothingItem Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={appStore}>
          <UpdateClothingItem />
        </Provider>
      </Router>
    );
  });

  describe('When the admin submits the form with correct values', () => {
    test('Then it calls the updateClothingItem function with the correct values', async () => {
      const form = screen.getByTestId('form-id');
      const nameInput = screen.getByPlaceholderText('Nombre');
      await userEvent.type(nameInput, 'Updated TestClothingItem');
      fireEvent.submit(form);
      expect(useClothes().updateClothingItem).toHaveBeenCalled();
    });
    test('Then it updates the selectedUpdateFrontFileName state', async () => {
      const fileUploadFrontInput = screen.getByTestId(
        'update-file-front-input'
      );
      expect(fileUploadFrontInput).toBeInTheDocument();
      const fileUploadFrontName = 'test-file.png';
      await userEvent.upload(
        fileUploadFrontInput,
        new File(['(⌐□_□)'], fileUploadFrontName, { type: 'image.png' })
      );
      const selectedFileName = screen.getByText(fileUploadFrontName);
      expect(selectedFileName).toBeInTheDocument();
    });
    test('Then it updates the selectedUpdateBackFileName state', async () => {
      const fileUploadBackInput = screen.getByTestId('update-file-back-input');
      expect(fileUploadBackInput).toBeInTheDocument();
      const fileUploadBackName = 'test-file.png';
      await userEvent.upload(
        fileUploadBackInput,
        new File(['(⌐□_□)'], fileUploadBackName, { type: 'image.png' })
      );
      const selectedFileName = screen.getByText(fileUploadBackName);
      expect(selectedFileName).toBeInTheDocument();
    });
    test('Then it calls the createClothingItem function with the correct values', async () => {
      const form = screen.getByRole('form');
      expect(form).toBeInTheDocument();
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'NameTest');
      await userEvent.type(input[1], 'SizeTest');
      await userEvent.type(input[2], 'PriceTest');
      await userEvent.type(input[3], 'HeightTest');
      await userEvent.type(input[4], 'WidthTest');
      await userEvent.type(input[5], 'TaresTest');
    });
  });
});
