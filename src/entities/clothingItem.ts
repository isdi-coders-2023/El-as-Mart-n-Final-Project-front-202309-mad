import { ImgData } from '../types/img.data.ts';
import { User } from './user.ts';

export type ClothingItem = {
  id: string;
  name: string;
  size: string;
  price: string;
  clothingItemHeight: string;
  clothingItemWidth: string;
  clothingItemFrontImg: ImgData;
  clothingItemBackImg: ImgData;
  tares: string;
  creator: User;
};
