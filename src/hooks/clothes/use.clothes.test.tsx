import { useClothes } from './use.clothes';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { appStore } from '../../store/store';
import { ClothingItem } from '../../entities/clothingItem';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
  useSelector: jest.fn().mockReturnValue({
    selectedValue: 'M',
  }),
}));

const mockClothingItem = {} as ClothingItem;
const mockClothingItemId = '';
const mockFormData = {} as FormData;
describe('Given useClothes Hook', () => {
  const TestComponent = () => {
    const {
      handleDetailsPage,
      loadClothes,
      createClothingItem,
      deleteClothingItem,
    } = useClothes();

    return (
      <>
        <button onClick={() => handleDetailsPage(mockClothingItem)}></button>
        <button onClick={() => loadClothes()}></button>
        <button onClick={() => createClothingItem(mockFormData)}></button>
        <button onClick={() => deleteClothingItem(mockClothingItemId)}></button>
      </>
    );
  };

  let elements: HTMLElement[];
  beforeEach(() => {
    render(
      <Provider store={appStore}>
        <TestComponent></TestComponent>
      </Provider>
    );
    elements = screen.getAllByRole('button');
  });

  describe('When we call its methods without errors', () => {
    test('Then the dispatch should have been called', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
