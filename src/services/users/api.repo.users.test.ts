import { UsersRepo } from './api.repo.users';
import { User, LoginUser } from '../../entities/user';

describe('Given UsersRepo class', () => {
  const repo = new UsersRepo();
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method getUsers should...', async () => {
      const expected: User[] = [];
      const result = await repo.getUsers();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method createUser should...', async () => {
      const newUser = new FormData();
      const mockUser: Partial<User> = { id: '1', name: 'Test Name' };
      const expectedUrl = 'http://localhost:3800/users/register';

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser),
      });
      const response = await repo.createUser(newUser);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: newUser,
      });
      expect(response).toEqual(mockUser);
    });

    test('Then method login should...', async () => {
      const loginUser = {
        email: 'test@test.com',
      } as LoginUser;
      const expectedUrl = 'http://localhost:3800/users/login';

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(loginUser),
      });
      const response = await repo.login(loginUser);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(loginUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(loginUser);
    });

    test('Then method loginWithToken should...', async () => {
      const mockToken = 'mockToken';
      const loginUser = {
        email: 'test@test.com',
      } as LoginUser;
      const expectedUrl = 'http://localhost:3800/users/login';
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(loginUser),
      });
      const response = await repo.loginWithToken(mockToken);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${mockToken}`,
        },
      });
      expect(response).toEqual(loginUser);
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
      expect(repo.getUsers()).rejects.toThrow();
    });
    test('Then method createUser should throw an error', async () => {
      const newUser = new FormData();
      expect(repo.createUser(newUser)).rejects.toThrow();
    });
    test('Then method login should throw an error', async () => {
      const loginUser = {
        email: 'test@test.com',
      } as LoginUser;
      expect(repo.login(loginUser)).rejects.toThrow();
    });
    test('Then method loginWithToken should throw an error', async () => {
      const token: string = 'mockedToken';
      expect(repo.loginWithToken(token)).rejects.toThrow();
    });
  });
});
