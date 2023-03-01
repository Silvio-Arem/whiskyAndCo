export interface IUser {
  id: number,
  name: string,
  email: string,
  password?: string,
  cpf: string,
  address: string,
  userType: string,
  userOrders?: number[]
}

export interface IProduct {
  id: number,
  name: string,
  category?: string,
  img?: string,
  price: string,
  description: string
}

export interface ICategory {
  id: number,
  name: string
}

export interface IOrder {
  id: number,
  name: string,
  //produtos
  price: string,
  orderDate: string;
}

export type Data = IUser | IProduct | ICategory | IOrder;
