import { createAsyncThunk } from '@reduxjs/toolkit';
import { ClothesRepo } from '../services/clothes/api.repo.clothes.ts';
import { ClothingItem } from '../entities/clothingItem.ts';

export const loadClothesThunk = createAsyncThunk<ClothingItem[], ClothesRepo>(
  'load',
  async (repo) => {
    const films = await repo.getClothes();
    return films;
  }
);
