export interface FoodCardProps {
  id: number;
  title: string;
  subTitle?: string;
  price: number;
  imgUrl: string;
}

export interface FoodCardWithQuantity
  extends Omit<FoodCardProps, "subTitle" | "price"> {
  quantity: number;
  totalPrice: number;
}

export interface ICartCard
  extends Omit<FoodCardWithQuantity, "title" | "imgUrl"> {}
