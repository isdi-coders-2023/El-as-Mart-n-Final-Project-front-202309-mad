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
