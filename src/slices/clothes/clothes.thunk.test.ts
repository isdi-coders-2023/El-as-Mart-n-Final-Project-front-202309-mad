import {
  createClothingItemThunk,
  deleteClothingItemThunk,
  filterClothesThunk,
  loadClothesThunk,
  updateClothingItemThunk,
} from './clothes.thunk';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { appStore } from '../../store/store.ts';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockClothesRepo = {
      repo: {
        getClothes: jest.fn().mockReturnValue([]),
        createClothingItem: jest.fn().mockReturnValue({}),
        updateClothingItem: jest.fn().mockResolvedValue({}),
        deleteClothingItem: jest.fn().mockResolvedValue('1'),
        filterClothes: jest.fn().mockReturnValue([]),
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
    test('Then it should dispatch updateClothingItemThunk and update a clothing item', async () => {
      const data = { ...mockClothesRepo } as { repo: ClothesRepo };
      const idToUpdate = '1';
      const updateClothingItem = {} as FormData;

      await appStore.dispatch(
        updateClothingItemThunk({
          repo: data.repo,
          id: idToUpdate,
          updateClothingItem,
        })
      );
      expect(data.repo.updateClothingItem).toHaveBeenCalledWith(
        idToUpdate,
        updateClothingItem
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
    test('Then it should dispatch filterClothesThunk and update clothes store with filtered items', async () => {
      const query = 'someSize';
      const data = { ...mockClothesRepo } as { repo: ClothesRepo };
      await appStore.dispatch(filterClothesThunk({ repo: data.repo, query }));
      expect(data.repo.filterClothes).toHaveBeenCalled();
    });
    test('Then it should dispatch filterClothesThunk and return the entire list of items when the query is empty', async () => {
      const query = '';
      const data = { ...mockClothesRepo } as { repo: ClothesRepo };
      await appStore.dispatch(filterClothesThunk({ repo: data.repo, query }));
      expect(data.repo.filterClothes).toHaveBeenCalled();
    });
  });
});
