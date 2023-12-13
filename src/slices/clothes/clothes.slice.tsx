import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ClothingItem } from '../../entities/clothingItem';
import { loadClothesThunk, createClothingItemThunk } from './clothes.thunk';

export type ClothesState = {
  clothes: ClothingItem[];
  stateOption: 'idle' | 'loading' | 'error';
  currentClothingItem: ClothingItem | null;
};

const initialState: ClothesState = {
  clothes: [],
  stateOption: 'idle',
  currentClothingItem: null,
};

const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setCurrentClothingItem: (
      state: ClothesState,
      { payload }: PayloadAction<ClothingItem | null>
    ) => {
      state.currentClothingItem = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadClothesThunk.pending, (state: ClothesState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadClothesThunk.fulfilled,
      (state: ClothesState, { payload }: PayloadAction<ClothingItem[]>) => {
        state.clothes = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadClothesThunk.rejected, (state: ClothesState) => {
      state.stateOption = 'error';
      return state;
    });
    builder.addCase(
      createClothingItemThunk.fulfilled,
      (state: ClothesState, { payload }: PayloadAction<ClothingItem>) => {
        state.clothes.push(payload);
        return state;
      }
    );
  },
});

export default clothesSlice.reducer;
export const { setCurrentClothingItem } = clothesSlice.actions;
