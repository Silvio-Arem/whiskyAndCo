export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  address: string;
  isAdmin: boolean;
  userOrders?: number[]
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  picture: string;
  price: number;
  description: string
}

export interface IOrder {
  id: number;
  name: string;
  productsList: {
    productID: number;
    quantity: number
  }[];
  amount: number;
  orderDate: string;
}

export interface ICategory {
  id: number;
  name: string
}

export interface IBrand {
  id: number;
  name: string
}

export type Data = IUser | IProduct | ICategory | IOrder;
