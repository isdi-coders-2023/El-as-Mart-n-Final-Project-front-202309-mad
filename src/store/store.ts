import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import clothingItemReducer from '../slices/clothes/clothes.slice';
import usersReducer from '../slices/users/users.slice';

export const appStore = configureStore({
  reducer: {
    clothesState: clothingItemReducer,
    usersState: usersReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
