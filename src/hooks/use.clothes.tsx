import { useCallback, useMemo } from 'react';
import { ClothesRepo } from '../services/api.repo.clothes.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ClothingItem } from '../entities/clothingItem.ts';
import { loadClothesThunk } from '../slices/clothes.thunk.ts';
import { setCurrentClothingItem } from '../slices/clothes.slice.tsx';

export function useClothes() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ClothesRepo(), []);

  const loadClothes = useCallback(async () => {
    try {
      dispatch(loadClothesThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const handleDetailsPage = async (clothingItem: ClothingItem) => {
    dispatch(setCurrentClothingItem(clothingItem));
  };

  return {
    loadClothes,
    handleDetailsPage,
  };
}
