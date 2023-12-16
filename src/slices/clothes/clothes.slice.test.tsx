import { ClothingItem } from '../../entities/clothingItem';
import clothesReducer, { ClothesState } from './clothes.slice';

describe('Given clothesReducer', () => {
  describe('When clothes/setCurrentClothingItem action is dispacth', () => {
    test('Then the new state will be returned with the currentClothingItem set', () => {
      const mockClothingItem = { name: 'NameTest' } as unknown as ClothingItem;
      const action = {
        type: 'clothes/setCurrentClothingItem',
        payload: mockClothingItem,
      };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.currentClothingItem).toBe(mockClothingItem);
    });
  });

  describe('When clothes/setFilteredClothes action is dispacth', () => {
    test('Then the new state will be returned with the filteredClothes set', () => {
      const mockFilteredClothes = [
        {
          name: 'NameTest',
        },
      ] as unknown as ClothingItem[];
      const action = {
        type: 'clothes/setFilteredClothes',
        payload: mockFilteredClothes,
      };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.filteredClothes).toBe(mockFilteredClothes);
    });
  });

  describe('When clothes/setSelectedValue action is dispacth', () => {
    test('Then the new state will be returned with the selectedValue set', () => {
      const mockSelectedValue: string = '';
      const action = {
        type: 'clothes/setSelectedValue',
        payload: mockSelectedValue,
      };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.selectedValue).toBe(mockSelectedValue);
    });
  });

  describe('When clothes/load/pending action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "loading"', () => {
      const action = { type: 'load/pending' };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.stateOption).toBe('loading');
    });
  });

  describe('When clothes/load/rejected action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "error"', () => {
      const action = { type: 'load/rejected' };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.stateOption).toBe('error');
    });
  });
  describe('When clothes/load/fulfilled action is dispacth', () => {
    test('Then the new state will be returned with stateOption set to "idle"', () => {
      const action = {
        type: 'load/fulfilled',
        payload: [{}] as unknown as ClothingItem,
      };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.stateOption).toBe('idle');
    });
  });
  describe('When clothes/create/fulfilled action is dispatched', () => {
    test('Then the new ClothingItem should be added to the state', () => {
      const mockClothingItem = {
        id: '1',
        name: 'NameTest',
      } as unknown as ClothingItem;
      const action = {
        type: 'create/fulfilled',
        payload: mockClothingItem,
      };
      const state: ClothesState = { clothes: [] } as unknown as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.clothes).toStrictEqual([mockClothingItem]);
    });
  });
  describe('When clothes/update/fulfilled action is dispacth', () => {
    test('Then the updated ClothingItem should replace the existing one in the state', () => {
      const mockClothingItem = {
        id: '1',
        name: 'NameTest',
      } as unknown as ClothingItem;
      const updatedClothingItem = {
        id: '1',
        name: 'UpdatedName',
      } as unknown as ClothingItem;
      const action = {
        type: 'update/fulfilled',
        payload: updatedClothingItem,
      };
      const state: ClothesState = {
        clothes: [mockClothingItem],
      } as ClothesState;
      const result = clothesReducer(state, action);

      expect(result.clothes).toStrictEqual([updatedClothingItem]);
    });
  });
  describe('When clothes/delete/fulfilled action is dispacth', () => {
    test('Then the clothingItem should be removed froms the state', () => {
      const mockClothingItem = {
        id: '1',
        name: 'NameTest',
      } as unknown as ClothingItem;
      const action = {
        type: 'delete/fulfilled',
        payload: mockClothingItem as unknown as ClothingItem['id'],
      };
      const state: ClothesState = {
        clothes: [mockClothingItem],
      } as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.clothes).toStrictEqual([]);
    });
  });
  describe('When clothes/filter/fulfilled action is dispacth', () => {
    test('Then the clothes in the state should be updated based on the filter result', () => {
      const mockFilteredClothes = [
        {
          id: '1',
          name: 'FilteredClothingItem',
        },
      ] as unknown as ClothingItem[];
      const action = {
        type: 'filter/fulfilled',
        payload: mockFilteredClothes,
      };
      const state: ClothesState = {
        clothes: [
          {
            id: '1',
            name: 'ClothingItem1',
          },
          {
            id: '2',
            name: 'ClothingItem2',
          },
        ],
      } as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.clothes).toStrictEqual(mockFilteredClothes);
    });
  });
});
