import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Details } from './details';
import { appStore } from '../../store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    currentClothingItem: {
      name: 'Test',
      clothingItemFrontImg: { publicId: '1' },
      clothingItemBackImg: { publicId: '1' },
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
      const frontImage = screen.getByTestId('small-image-front');
      await userEvent.click(frontImage);
      const backImage = screen.getByTestId('small-image-back');
      await userEvent.click(backImage);
    });
  });
});
