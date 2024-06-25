module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.svg$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(svg|png|jpg)$": "jest-transform-stub",
    "firebase-config": "<rootDir>/src/__mocks__/firebase-config.ts",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/store/slices/cart.slice.ts",
    "src/components/Header/Cart/Cart.tsx",
  ],
};
