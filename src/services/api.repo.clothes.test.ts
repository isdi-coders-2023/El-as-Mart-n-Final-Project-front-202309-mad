import { ClothesRepo } from './api.repo.clothes';
import { ClothingItem } from '../entities/clothingItem';

describe('Given ClothesRepo class', () => {
  const repo = new ClothesRepo();
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
  });
  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });
    });
    test('Then method getUsers should throw an error', async () => {
      expect(repo.getClothes()).rejects.toThrow();
    });
  });
});
