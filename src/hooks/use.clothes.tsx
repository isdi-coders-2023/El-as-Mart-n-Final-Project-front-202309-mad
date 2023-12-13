import { useCallback, useMemo } from 'react';
import { ClothesRepo } from '../services/clothes/api.repo.clothes.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ClothingItem } from '../entities/clothingItem.ts';
import {
  createClothingItemThunk,
  loadClothesThunk,
} from '../slices/clothes.thunk.ts';
import { setCurrentClothingItem } from '../slices/clothes.slice.tsx';

export function useClothes() {
  const { currentClothingItem, clothes } = useSelector(
    (state: RootState) => state.clothesState
  );
  const { token } = useSelector((state: RootState) => state.usersState);
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ClothesRepo(token), []);

  const loadClothes = useCallback(async () => {
    dispatch(loadClothesThunk(repo));
  }, [repo]);

  const createClothingItem = async (newClothingItem: FormData) => {
    dispatch(
      createClothingItemThunk({
        repo,
        newClothingItem,
      })
    );
  };

  const handleDetailsPage = async (clothingItem: ClothingItem) => {
    dispatch(setCurrentClothingItem(clothingItem));
  };

  return {
    loadClothes,
    createClothingItem,
    handleDetailsPage,
    currentClothingItem,
    clothes,
  };
}
