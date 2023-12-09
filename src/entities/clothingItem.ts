import { ImgData } from '../types/img.data';
import { User } from './user';

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
