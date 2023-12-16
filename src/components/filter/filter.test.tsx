import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Filter } from './filter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import userEvent from '@testing-library/user-event';
import { useClothes } from '../../hooks/clothes/use.clothes';

jest.mock('../../hooks/clothes/use.clothes', () => ({
  useClothes: jest.fn().mockReturnValue({
    handleFilter: jest.fn(),
  }),
}));

describe('Given Filter component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Filter></Filter>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then it should be in the document', async () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
      await userEvent.selectOptions(element, 'S');
      expect(useClothes().handleFilter).toHaveBeenCalled();
    });
  });
});
