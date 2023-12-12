import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { ClothingItem } from '../../entities/clothingItem';

import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    handleDetailsPage: jest.fn(),
  }),
}));

jest.mock('../../services/images', () => ({
  makeImageURL: jest.fn(),
}));

describe('Given Card component', () => {
  describe('When we instantiate it', () => {
    const mockClothingItem = {
      name: 'NameTest',
      clothingItemFrontImg: { publicId: '1' },
    } as unknown as ClothingItem;
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Card clothingItem={mockClothingItem as ClothingItem}></Card>
        </Provider>
      </BrowserRouter>
    );

    test('Then it should call handleDetailsPage', async () => {
      let element = screen.getByTestId('details');
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      element = screen.getByTestId('details2');
      await userEvent.click(element);
      element = screen.getByTestId('details3');
      await userEvent.click(element);
    });
  });
});
