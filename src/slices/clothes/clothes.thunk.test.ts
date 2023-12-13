import { createClothingItemThunk, loadClothesThunk } from './clothes.thunk';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { appStore } from '../../store/store.ts';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockClothesRepo = {
      repo: {
        getClothes: jest.fn().mockReturnValue([]),
        createClothingItem: jest.fn().mockReturnValue({}),
      } as unknown as ClothesRepo,
    };

    test('Then it should dispatch loadClothesThunk and update clothes store', async () => {
      const data = { ...mockClothesRepo } as { repo: ClothesRepo };
      await appStore.dispatch(loadClothesThunk(data.repo));
      expect(data.repo.getClothes).toHaveBeenCalled();
    });

    test('Then it should dispatch createClothingItemThunk and create a new clothing item', async () => {
      const data = { ...mockClothesRepo } as { repo: ClothesRepo };
      const newClothingItem = {} as FormData;
      await appStore.dispatch(
        createClothingItemThunk({ repo: data.repo, newClothingItem })
      );
      expect(data.repo.createClothingItem).toHaveBeenCalledWith(
        newClothingItem
      );
    });
  });
});
