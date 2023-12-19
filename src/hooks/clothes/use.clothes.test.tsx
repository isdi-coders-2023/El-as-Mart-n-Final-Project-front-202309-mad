import { useClothes } from './use.clothes';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, appStore } from '../../store/store';
import { ClothingItem } from '../../entities/clothingItem';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
  useSelector: jest
    .fn()
    .mockReturnValue((state: RootState) => state.clothesState)
    .mockReturnValue({
      selectedValue: '',
    }),
}));

const mockClothingItem = {} as ClothingItem;
const mockClothingItemId = '';
const mockFormData = {} as FormData;
const mockEvent = {
  preventDefault: jest.fn(),
  target: { value: 'test' },
} as unknown as React.SyntheticEvent;

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
        <button onClick={() => handleFilter(mockEvent)}></button>
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

    test('Then the dispatch should have been called with filterClothesThunk', async () => {
      (useSelector as jest.Mock).mockImplementation((selector) =>
        selector({
          usersState: { token: 'mockToken' },
          clothesState: { clothes: [], selectedValue: 'test' },
        })
      );

      await userEvent.click(elements[1]);

      expect(useDispatch).toHaveBeenCalled();
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

describe('Given loadClothes', () => {
  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
    useSelector: jest
      .fn()
      .mockReturnValue((state: RootState) => state.clothesState)
      .mockReturnValue({
        selectedValue: 'test',
      }),
  }));
  const TestComponent = () => {
    const { loadClothes } = useClothes();
    return <button onClick={() => loadClothes()}></button>;
  };
  let elementss: HTMLElement[];
  beforeEach(() => {
    render(<TestComponent></TestComponent>);
    elementss = screen.getAllByRole('button');
  });
  test('Then the dispatch should have been called with filterClothesThunk', async () => {
    await userEvent.click(elementss[0]);
    expect(useDispatch).toHaveBeenCalled();
  });
});
