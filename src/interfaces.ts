export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  address: string;
  isAdmin: boolean;
  userOrders?: number[]
}

export interface IProduct {
  _id?: string,
  name: string,
  category: ICategory,
  brand: IBrand,
  picture: string,
  price: number,
  description: string
}

export interface IOrder {
  _id?: string;
  name: string;
  productsList: {
    productid: number;
    quantity: number
  }[];
  amount: number;
  orderDate: string;
}

export interface ICategory {
  _id?: string;
  name: string
}

export interface IBrand {
  _id?: string;
  name: string
}

export type Data = IUser | IProduct | ICategory | IOrder;
