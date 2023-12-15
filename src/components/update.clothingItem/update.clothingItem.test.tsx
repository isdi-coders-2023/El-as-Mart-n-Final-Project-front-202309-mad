import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { UpdateClothingItem } from './update.clothingItem';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { ClothingItem } from '../../entities/clothingItem';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    currentClothingItem: {
      id: '1',
      name: 'TestClothingItem',
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
  });
});
