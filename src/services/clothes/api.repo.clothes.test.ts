import { ClothesRepo } from './api.repo.clothes';
import { ClothingItem } from '../../entities/clothingItem';

describe('Given ClothesRepo class', () => {
  const repo = new ClothesRepo('');
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getClothes should...', async () => {
      const expected: ClothingItem[] = [];
      const result = await repo.getClothes();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method createClothingItem should...', async () => {
      const mockFormData = {} as FormData;
      const expected = [] as ClothingItem[];
      const result = await repo.createClothingItem(mockFormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method updateClothingItem should...', async () => {
      const mockId = '1';
      const mockFormData = {} as FormData;
      const expected = [] as ClothingItem[];
      const result = await repo.updateClothingItem(mockId, mockFormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method filterClothes should...', async () => {
      const mockQuery = 'M';
      const expected: ClothingItem[] = [];
      const result = await repo.filterClothes(mockQuery);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we instantiate it and response is bad', () => {
    const mockQuery = 'M';
    const mockId = '1';
    const mockFormData = {} as FormData;
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });
    });
    test('Then method getClothes should throw an error', async () => {
      expect(repo.getClothes()).rejects.toThrow();
    });
    test('Then method createClothingItem should throw an error', async () => {
      expect(repo.createClothingItem(mockFormData)).rejects.toThrow();
    });
    test('Then method updateClothingItem should throw an error', async () => {
      expect(repo.updateClothingItem(mockId, mockFormData)).rejects.toThrow();
    });
    test('Then deleteClothingItemshould throw an error', async () => {
      const clothingItemId = '1';
      await expect(repo.deleteClothingItem(clothingItemId)).rejects.toThrow();
    });
    test('Then method filterClothes should throw an error', async () => {
      expect(repo.filterClothes(mockQuery)).rejects.toThrow();
    });
  });
});
