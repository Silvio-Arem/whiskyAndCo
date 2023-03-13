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
  userId: string;
  products: {
    productid: string;
    quantity: number
  }[];
  amount: number;
  createdAt: string;
}

export interface ICategory {
  _id?: string;
  name: string
}

export interface IBrand {
  _id?: string;
  name: string
}

export type Data = IUser | IProduct | ICategory;
