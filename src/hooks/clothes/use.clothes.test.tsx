import { useClothes } from './use.clothes';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { appStore } from '../../store/store';
import { ClothingItem } from '../../entities/clothingItem';
import { SyntheticEvent } from 'react';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
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
      updateClothingItem,
      handleFilter,
    } = useClothes();

    return (
      <>
        <button onClick={() => handleDetailsPage(mockClothingItem)}></button>
        <button onClick={() => loadClothes()}></button>
        <button onClick={() => createClothingItem(mockFormData)}></button>
        <button onClick={() => deleteClothingItem(mockClothingItemId)}></button>
        <button
          onClick={() => updateClothingItem(mockClothingItemId, mockFormData)}
        ></button>
        <button
          onClick={(event: SyntheticEvent) => handleFilter(event)}
        ></button>
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

  describe('When calling useClothes Hook methods without errors', () => {
    test('Then dispatch should have been called when handling details page click', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });

    test('Then dispatch should have been called when loading clothes click', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });

    test('Then dispatch should have been called when creating a clothing item click', async () => {
      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });

    test('Then dispatch should have been called when deleting a clothing item click', async () => {
      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then dispatch should have been called when updating a clothing item click', async () => {
      await userEvent.click(elements[4]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then dispatch should have been called when handling filter click', async () => {
      await userEvent.click(elements[5]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
