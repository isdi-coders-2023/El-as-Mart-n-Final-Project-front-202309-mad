import { ImgData } from '../types/img.data.ts';
import { ClothingItem } from './clothingItem.ts';

export type LoginUser = {
  email: string;
  passwd: string;
};

export type User = LoginUser & {
  id: string;
  name: string;
  surname: string;
  age: number;
  clothes: ClothingItem[];
  avatar: ImgData;
  role: 'Admin' | 'User';
};
