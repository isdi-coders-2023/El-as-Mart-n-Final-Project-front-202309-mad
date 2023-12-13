import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { List } from './list';
import { appStore } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { useClothes } from '../../hooks/clothes/use.clothes';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    clothes: [
      { id: '1', name: 'Bomber' },
      { id: '2', name: 'Shirt' },
    ],
    loadClothes: jest.fn(),
  }),
}));
describe('Given List Component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <List></List>
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then should render the List component', () => {
      const result = screen.getByText(/LAST/i);
      expect(result).toBeInTheDocument();
    });
    test('Then loadClothes should been called', () => {
      expect(useClothes().loadClothes).toHaveBeenCalled();
      const element = screen.getByText(/Talla/i);
      expect(element).toBeInTheDocument();
    });
    test('Then should render each clothing item', () => {
      const clothingItems = useClothes().clothes;
      clothingItems.forEach((item) => {
        const cardElement = screen.getByText(item.name);
        expect(cardElement).toBeInTheDocument();
      });
    });
  });
});
