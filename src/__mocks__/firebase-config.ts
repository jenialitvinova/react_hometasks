export const auth = {
  currentUser: { uid: "test-uid" },
};

export const db = {
  collection: jest.fn(() => ({
    doc: jest.fn(() => ({
      get: jest.fn(),
      set: jest.fn(),
      delete: jest.fn(),
    })),
  })),
};
