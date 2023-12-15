import { useCallback, useMemo } from 'react';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { ClothingItem } from '../../entities/clothingItem.ts';
import {
  createClothingItemThunk,
  deleteClothingItemThunk,
  loadClothesThunk,
  updateClothingItemThunk,
} from '../../slices/clothes/clothes.thunk.ts';
import { setCurrentClothingItem } from '../../slices/clothes/clothes.slice.tsx';

// AÑADIR ESTRUCTURA TRY CATCH A A TODOS LOS MÉTODOS DEL CUSTOM HOOK

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

  const updateClothingItem = async (
    id: ClothingItem['id'],
    updateClothingItem: FormData
  ) => {
    dispatch(updateClothingItemThunk({ id, repo, updateClothingItem }));
  };

  const deleteClothingItem = async (id: ClothingItem['id']) => {
    dispatch(
      deleteClothingItemThunk({
        id,
        repo,
      })
    );
  };

  const handleDetailsPage = async (clothingItem: ClothingItem) => {
    dispatch(setCurrentClothingItem(clothingItem));
  };

  return {
    loadClothes,
    createClothingItem,
    updateClothingItem,
    deleteClothingItem,
    handleDetailsPage,
    currentClothingItem,
    clothes,
  };
}
