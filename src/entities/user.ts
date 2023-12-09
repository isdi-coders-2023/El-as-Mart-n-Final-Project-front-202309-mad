import { ImgData } from '../types/img.data';
import { ClothingItem } from './clothingItem';

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
