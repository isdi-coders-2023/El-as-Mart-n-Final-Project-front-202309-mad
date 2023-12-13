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
  describe('When create/fulfilled action is dispatched', () => {
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
});
