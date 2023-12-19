/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    'src/main.tsx',
    'src/vite-env.d.ts',
    'src/services/local.storage.ts',
    'src/config.ts',
    'src/store/store.ts',
    'src/components/app/app.tsx',
    'src/services/images.ts',
    'src/pages/admin.panel/admin.panel.tsx',
    'src/pages/login/login.tsx',
    'src/pages/register/register.tsx',
    'src/pages/details/details.tsx',
    'src/pages/home/home.tsx',
    'src/pages/create.clothingItem/create.clothingItem.tsx',
    'src/pages/update.clothingItem/update.clothingItem.tsx',
    'src/pages/error/error.tsx',
    'src/pages/about.us/about.us.tsx',
    'src/pages/not.implemented/not.implemented.tsx',
  ],
};
