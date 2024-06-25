export interface FoodCardProps {
  id: number;
  title: string;
  subTitle: string;
  price: string;
  imgUrl: string;
}

export interface FoodCardWithQuantity extends Omit<FoodCardProps, 'subTitle' | 'imgUrl'> {
  quantity: number;
}
