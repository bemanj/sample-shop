
export interface Product {
  $key: string;
  title: string;
  price: number;
  unitsinstock: number,
  discontinued: boolean,
  quantityperunit: string,
  reorderlevel: number,
  supplier: string,
  unitsonorder: number,
  category: string;
  imageUrl: string;
}