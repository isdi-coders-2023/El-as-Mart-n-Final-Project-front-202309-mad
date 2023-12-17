import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { CreateClothingItem } from './create.clothingItem';
import { useClothes } from '../../hooks/clothes/use.clothes';
import '@testing-library/jest-dom';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    createClothingItem: jest.fn(),
  }),
}));

describe('Given CreateClothingItem Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={appStore}>
          <CreateClothingItem />
        </Provider>
      </Router>
    );
  });

  describe('When the admin submits the form with correct values', () => {
    test('Then it calls the createClothingItem function with the correct values', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'Talla M');
      await fireEvent.submit(form);
      expect(useClothes().createClothingItem).toHaveBeenCalled();
    });
    test('Then it updates the selectedFrontFileName state', async () => {
      const fileFrontInput = screen.getByTestId('file-front-input');
      expect(fileFrontInput).toBeInTheDocument();
      const fileFrontName = 'test-file.png';
      await userEvent.upload(
        fileFrontInput,
        new File(['(⌐□_□)'], fileFrontName, { type: 'image.png' })
      );
      const selectedFileName = screen.getByText(fileFrontName);
      expect(selectedFileName).toBeInTheDocument();
    });
    test('Then it updates the selectedBackFileName state', async () => {
      const fileBackInput = screen.getByTestId('file-back-input');
      expect(fileBackInput).toBeInTheDocument();
      const fileBackName = 'test-file.png';
      await userEvent.upload(
        fileBackInput,
        new File(['(⌐□_□)'], fileBackName, { type: 'image.png' })
      );
      const selectedFileName = screen.getByText(fileBackName);
      expect(selectedFileName).toBeInTheDocument();
    });
  });
});
