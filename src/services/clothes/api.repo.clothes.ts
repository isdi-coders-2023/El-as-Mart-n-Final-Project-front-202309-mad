import { serverUrl } from '../../config';
import { ClothingItem } from '../../entities/clothingItem';

export class ClothesRepo {
  apiUrl = serverUrl + '/clothes';
  constructor(public token: string) {}

  async getClothes(): Promise<ClothingItem[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createClothingItem(newClothingItem: FormData): Promise<ClothingItem> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: newClothingItem,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
