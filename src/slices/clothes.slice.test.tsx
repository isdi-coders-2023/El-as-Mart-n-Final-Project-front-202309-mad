import { ClothingItem } from '../entities/clothingItem';
import clothesReducer, { ClothesState } from './clothes.slice';

describe('Given clothesReducer', () => {
  describe(' When clothes/setCurrentClothingItem action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
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

  describe(' When clothes/load/pending action is dispacth  ', () => {
    test('Then the new state will be returned ', () => {
      const action = { type: 'load/pending' };
      const state: ClothesState = {} as ClothesState;
      const result = clothesReducer(state, action);
      expect(result.stateOption).toBe('loading');
    });
  });

  test('Then the new state will be returned ', () => {
    const action = { type: 'load/rejected' };
    const state: ClothesState = {} as ClothesState;
    const result = clothesReducer(state, action);
    expect(result.stateOption).toBe('error');
  });

  test('Then the new state will be returned ', () => {
    const action = {
      type: 'load/fulfilled',
      payload: [{}] as unknown as ClothingItem,
    };
    const state: ClothesState = {} as ClothesState;
    const result = clothesReducer(state, action);
    expect(result.stateOption).toBe('idle');
  });
});
