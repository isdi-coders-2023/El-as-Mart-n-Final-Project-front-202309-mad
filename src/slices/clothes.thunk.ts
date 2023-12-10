import { createAsyncThunk } from '@reduxjs/toolkit';
import { ClothesRepo } from '../services/api.repo.clothes.ts';
import { ClothingItem } from '../entities/clothingItem.ts';

export const loadClothesThunk = createAsyncThunk<ClothingItem[], ClothesRepo>(
  'clothes/load',
  async (repo) => {
    const films = await repo.getClothes();
    return films;
  }
);
