export interface IUser {
  id: number;
  name: string;
  email: string;
  password?: string;
  cpf: string;
  address: string;
  userType: string;
  userOrders?: number[]
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  img: string;
  price: number;
  description: string
}

export interface IOrder {
  id: number;
  name: string;
  productsList: [{
    productID: number;
    quantity: number
  }];
  totalPrice: number;
  orderDate: string;
}

export interface ICategory {
  id: number;
  name: string,
  categoryTypes: string[]

}

export type Data = IUser | IProduct | ICategory | IOrder;
