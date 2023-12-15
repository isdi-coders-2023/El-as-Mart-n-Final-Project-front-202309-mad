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

  async updateClothingItem(
    id: string,
    updatedClothingItem: FormData
  ): Promise<ClothingItem> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: updatedClothingItem,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteClothingItem(id: ClothingItem['id']): Promise<void> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
  }

  async filterClothes(query: string): Promise<ClothingItem[]> {
    const response = await fetch(`${this.apiUrl}/search?size=${query}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
