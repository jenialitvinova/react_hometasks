import cartReducer, {
  addToCart,
  removeFromCart,
  clearCart,
  setCart,
} from "../cart.slice";
import {
  FoodCardWithQuantity,
  ICartCard,
} from "../../../components/FoodCard/FoodCard.types";

const mockItem: FoodCardWithQuantity = {
  id: 1,
  title: "Test Item",
  imgUrl: "test-url",
  quantity: 2,
  totalPrice: 20,
};

describe("cartSlice", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("should handle setCart", () => {
    const previousState: FoodCardWithQuantity[] = [];
    expect(cartReducer(previousState, setCart([mockItem]))).toEqual([mockItem]);
  });

  it("should handle addToCart when item does not exist", () => {
    const previousState: FoodCardWithQuantity[] = [];
    expect(cartReducer(previousState, addToCart(mockItem))).toEqual([mockItem]);
  });

  it("should handle addToCart when item already exists", () => {
    const previousState: FoodCardWithQuantity[] = [mockItem];
    const updatedItem: FoodCardWithQuantity = {
      ...mockItem,
      quantity: 1,
      totalPrice: 10,
    };
    expect(cartReducer(previousState, addToCart(updatedItem))).toEqual([
      {
        ...mockItem,
        quantity: 3,
        totalPrice: 30,
      },
    ]);
  });

  it("should handle removeFromCart", () => {
    const previousState: FoodCardWithQuantity[] = [mockItem];
    const itemToRemove: ICartCard = {
      id: mockItem.id,
      quantity: mockItem.quantity,
      totalPrice: mockItem.totalPrice,
    };
    expect(cartReducer(previousState, removeFromCart(itemToRemove))).toEqual(
      [],
    );
  });

  it("should handle clearCart", () => {
    const previousState: FoodCardWithQuantity[] = [mockItem];
    expect(cartReducer(previousState, clearCart())).toEqual([]);
  });
});
