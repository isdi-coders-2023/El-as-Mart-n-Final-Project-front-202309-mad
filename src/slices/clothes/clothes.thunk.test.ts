import {
  createClothingItemThunk,
  deleteClothingItemThunk,
  loadClothesThunk,
} from './clothes.thunk';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { appStore } from '../../store/store.ts';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockClothesRepo = {
      repo: {
        getClothes: jest.fn().mockReturnValue([]),
        createClothingItem: jest.fn().mockReturnValue({}),
        deleteClothingItem: jest.fn().mockResolvedValue('1'),
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
    test('Then it should dispatch deleteClothingItemThunk and delete a clothing item', async () => {
      const data = { ...mockClothesRepo } as { repo: ClothesRepo };
      const idToDelete = '1';
      await appStore.dispatch(
        deleteClothingItemThunk({ repo: data.repo, id: idToDelete })
      );

      expect(data.repo.deleteClothingItem).toHaveBeenCalledWith(idToDelete);
    });
  });
});
