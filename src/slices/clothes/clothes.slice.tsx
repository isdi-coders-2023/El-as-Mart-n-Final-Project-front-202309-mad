import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ClothingItem } from '../../entities/clothingItem';
import {
  loadClothesThunk,
  createClothingItemThunk,
  deleteClothingItemThunk,
  updateClothingItemThunk,
  filterClothesThunk,
} from './clothes.thunk';

export type ClothesState = {
  clothes: ClothingItem[];
  stateOption: 'idle' | 'loading' | 'error';
  currentClothingItem: ClothingItem | null;
  filteredClothes: ClothingItem[];
  selectedValue: string;
};

const initialState: ClothesState = {
  clothes: [],
  stateOption: 'idle',
  currentClothingItem: null,
  filteredClothes: [],
  selectedValue: '',
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
    setFilteredClothes: (
      state: ClothesState,
      { payload }: PayloadAction<ClothingItem[]>
    ) => {
      state.filteredClothes = payload;
      return state;
    },
    setSelectedValue: (
      state: ClothesState,
      { payload }: PayloadAction<string>
    ) => {
      state.selectedValue = payload;
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
    builder.addCase(
      updateClothingItemThunk.fulfilled,
      (state: ClothesState, { payload }: PayloadAction<ClothingItem>) => {
        state.clothes[
          state.clothes.findIndex((item) => item.id === payload.id)
        ] = payload;
        return state;
      }
    );
    builder.addCase(
      deleteClothingItemThunk.fulfilled,
      (state: ClothesState, { payload }: PayloadAction<ClothingItem['id']>) => {
        state.clothes.splice(
          state.clothes.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );
    builder.addCase(
      filterClothesThunk.fulfilled,
      (state: ClothesState, { payload }: PayloadAction<ClothingItem[]>) => {
        state.clothes = payload;
        return state;
      }
    );
  },
});

export default clothesSlice.reducer;
export const { setCurrentClothingItem, setFilteredClothes, setSelectedValue } =
  clothesSlice.actions;
