import { serverUrl } from '../../config';
import { ClothingItem } from '../../entities/clothingItem';

export class ClothesRepo {
  apiUrl = serverUrl + '/clothes';

  async getClothes(): Promise<ClothingItem[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
