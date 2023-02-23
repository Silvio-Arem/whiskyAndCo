export interface IUser {
  id?: number,
  name: string,
  email: string,
  cpf: string,
  address: string,
  userType?: string
}

export interface IProduct {
  id: number,
  name: string,
  price: string,
  info: string
}

export interface ICategory {
  id: number,
  name: string
}

export interface IOrder {
  id: number,
  price: string,
  orderDate: Date;
}