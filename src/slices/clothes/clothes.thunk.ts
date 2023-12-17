import { createAsyncThunk } from '@reduxjs/toolkit';
import { ClothesRepo } from '../../services/clothes/api.repo.clothes.ts';
import { ClothingItem } from '../../entities/clothingItem.ts';

export type Params = {
  repo: ClothesRepo;
  newClothingItem: FormData;
};

export const loadClothesThunk = createAsyncThunk<ClothingItem[], ClothesRepo>(
  'load',
  async (repo) => {
    const films = await repo.getClothes();
    return films;
  }
);

export const createClothingItemThunk = createAsyncThunk<ClothingItem, Params>(
  'create',
  async ({ repo, newClothingItem }) => {
    const finalClothingItem = await repo.createClothingItem(newClothingItem);
    return finalClothingItem;
  }
);

export const updateClothingItemThunk = createAsyncThunk<
  ClothingItem,
  {
    repo: ClothesRepo;
    id: ClothingItem['id'];
    updateClothingItem: FormData;
  }
>('update', async ({ repo, id, updateClothingItem }) => {
  const finalClothingItem = await repo.updateClothingItem(
    id,
    updateClothingItem
  );
  return finalClothingItem;
});

export const deleteClothingItemThunk = createAsyncThunk<
  ClothingItem['id'],
  {
    repo: ClothesRepo;
    id: ClothingItem['id'];
  }
>('delete', async ({ repo, id }) => {
  await repo.deleteClothingItem(id);
  return id;
});

export const filterClothesThunk = createAsyncThunk(
  'filter',
  async ({ repo, query }: { repo: ClothesRepo; query: string }) => {
    const allClothes = await repo.filterClothes(query);
    if (query === '') {
      return allClothes;
    } else {
      return allClothes.filter((clothingItem) => clothingItem.size === query);
    }
  }
);
