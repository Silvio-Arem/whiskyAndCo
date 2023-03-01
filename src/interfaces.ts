export interface IUser {
  id: number,
  name: string,
  email: string,
  cpf: string,
  address: string,
  userType?: string
}

export interface IProduct {
  id: number,
  name: string,
  // category: string,
  price: string,
  info: string
}

export interface ICategory {
  id: number,
  name: string
}

export interface IOrder {
  id: number,
  name: string,
  price: string,
  orderDate: Date;
}

export enum User_labels {
  name = "Nome Completo",
  email = "Email",
  cpf = "CPF",
  address = "Endereço",
  userType = "Tipo do Usuário"
}

export enum Product_labels {
  id = "Identificador do Produto",
  name = "Nome do Produto", 
  price = "Preço",
  info = "Texto de descrição",
  category = "Categoria"
}

export enum Category_labels {
  id = "Identificador da Categoria",
  name = "Nome da Categoria"
}

export enum Order_labels {
  id = "Número do Pedido",
  name = "Usuário associado ao Pedido",
  price = "Valor Total da compra",
  orderDate = "Data do pedido"
}

export type Data = IUser | IProduct | ICategory | IOrder;

// export type Labels = User_labels | Product_labels | Category_labels | Order_labels;