import { SyntheticEvent, useCallback, useMemo } from 'react';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { ClothingItem } from '../../entities/clothingItem.ts';
import {
  createClothingItemThunk,
  deleteClothingItemThunk,
  filterClothesThunk,
  loadClothesThunk,
  updateClothingItemThunk,
} from '../../slices/clothes/clothes.thunk.ts';
import {
  setCurrentClothingItem,
  setSelectedValue,
} from '../../slices/clothes/clothes.slice.tsx';

export function useClothes() {
  const dispatch = useDispatch<AppDispatch>();
  const { currentClothingItem, clothes, filteredClothes, selectedValue } =
    useSelector((state: RootState) => state.clothesState);
  const { token } = useSelector((state: RootState) => state.usersState);

  const repo = useMemo(() => new ClothesRepo(token), []);

  const loadClothes = useCallback(async () => {
    try {
      if (selectedValue === '') {
        dispatch(loadClothesThunk(repo));
      } else {
        dispatch(filterClothesThunk({ repo, query: selectedValue }));
      }
    } catch (error) {
      // console.log((error as Error).message);
    }
  }, [repo, selectedValue]);

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

  const handleFilter = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    const value = element.value;
    dispatch(setSelectedValue(value));
    dispatch(filterClothesThunk({ repo, query: value }));
  };

  return {
    loadClothes,
    createClothingItem,
    updateClothingItem,
    deleteClothingItem,
    handleDetailsPage,
    handleFilter,
    currentClothingItem,
    clothes,
    selectedValue,
    filteredClothes,
  };
}
