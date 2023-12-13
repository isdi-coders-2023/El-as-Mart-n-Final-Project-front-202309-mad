import { loadClothesThunk } from './clothes.thunk';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { appStore } from '../../store/store.ts';

describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const sharedData = {
      repo: {
        getClothes: jest.fn().mockReturnValue([]),
      } as unknown as ClothesRepo,
    };

    test('Then it should dispatch loadClothesThunk and update clothes store', async () => {
      const data = { ...sharedData } as { repo: ClothesRepo };
      await appStore.dispatch(loadClothesThunk(data.repo));
      expect(data.repo.getClothes).toHaveBeenCalled();
    });
  });
});
