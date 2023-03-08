
export const users = [
  {id:1,name:"Trefor Balentyne", password: "", email:"tbalentyne0@twitpic.com",cpf:"532-51-0651",address:"69093 Jay Point", isAdmin: false, userOrders : [1, 2]},
  {id:2,name:"Lucina Ovenell",password: "", email:"lovenell1@hp.com",cpf:"247-94-2389",address:"115 Armistice Center", isAdmin: false, userOrders : []},
  {id:3,name:"Barnie Hoyland",password: "", email:"bhoyland2@macromedia.com",cpf:"315-35-7863",address:"65610 Coolidge Junction", isAdmin: false, userOrders : []},
  {id:4,name:"Leandra Coslett",password: "", email:"lcoslett3@parallels.com",cpf:"806-48-1053",address:"919 7th Drive", isAdmin: true, userOrders : []},
  {id:5,name:"Filberto Pleaden",password: "", email:"fpleaden4@trellian.com",cpf:"746-48-1758",address:"7 Sunnyside Trail", isAdmin: false, userOrders : []},
  {id:6,name:"Ruthy Tretwell",password: "", email:"rtretwell5@comsenz.com",cpf:"882-78-6865",address:"268 Jay Junction", isAdmin: false, userOrders : []},
  {id:7,name:"Ambrosi Sparshutt",password: "", email:"asparshutt6@rambler.ru",cpf:"589-74-1802",address:"76 Leroy Center", isAdmin: false, userOrders : []},
  {id:8,name:"Hakeem Mc Faul",password: "", email:"hmc7@mapy.cz",cpf:"283-08-0305",address:"479 Sullivan Crossing", isAdmin: false, userOrders : []},
  {id:9,name:"Joel Bromehed",password: "", email:"jbromehed8@etsy.com",cpf:"573-72-4332",address:"7 Ruskin Crossing", isAdmin: false, userOrders : []},
  {id:10,name:"Charmine Johanssen",password: "", email:"cjohanssen9@about.com",cpf:"447-93-6389",address:"4506 Charing Cross Hill", isAdmin: true, userOrders : []},
];

export const products = [
  { id: 1, name: "Whiskey Woodford Reserve 750ml", category: "Tennessee Whiskey", brand: "", picture: "", price: 185.91, description: "Woodford Reserve é um luxuoso bourbon, cuidadosamente produzido à mão em pequenos lotes na Woodford Reserve Distillery. Tradicional desde 1812, é a destilaria mais antiga dos Estados Unidos. Triplamente destilada e envelhecida sob medida ao longo do tempo em barris de carvalho branco americano. É o unico bourbon do mundo a ter barris criados especificamente para sua produção. O mashbill para Woodford Reserve apresenta uma elevada porcentagem de centeio: 72% do milho, 18% de centeio e 10% de malte." },
  { id: 2, name: "Whisky Suntory Hibiki Harmony 700ml", category: "Whisky Japonês", brand: "", picture: "", price: 632.31, description: "Luminoso, delicado, de uma transparência que revela complexidade. O Whisky Hibiki Harmony é uma bebida leve com notas de cascas de laranja e chocolate branco que ajuda a torná-lo um whisky sedutor. Ele é formado por grãos e maltes do Japão que ajuda a fazer dele uma bebida que representa estações do país." },
  { id: 3, name: "Bourbon Maker's Mark 700ml", category: "Bourbon Whiskey", brand: "", picture: "", price: 139.90, description: "O Bourbon Maker's Mark é uma bebida produzida em Loretto, Kentucky, nos Estados Unidos. É conhecido pelo seu processo de produção, que inclui a utilização de milho vermelho, cevada maltada e centeio em sua composição, além de ser envelhecido em barris de carvalho branco americano por seis anos." },
  { id: 4, name: "Bourbon Wild Turkey 101 1L", category: "Bourbon Whiskey", brand: "", picture: "", price: 219.90, description: "O Bourbon Wild Turkey 101 é uma bebida produzida em Lawrenceburg, Kentucky, nos Estados Unidos. É conhecido pela sua alta graduação alcoólica, que chega a 50,5% em volume, e pelo seu sabor rico em notas de baunilha, caramelo e especiarias." },
  { id: 5, name: "Rye Whiskey Bulleit 750ml", category: "Rye", picture: "", brand: "", price: 149.90, description: "O Rye Whiskey Bulleit é uma bebida produzida em Lawrenceburg, Kentucky, nos Estados Unidos. É conhecido pelo seu sabor marcante de centeio, que lhe confere notas picantes e terrosas, além de um final seco e persistente. É envelhecido por no mínimo quatro anos em barris de carvalho branco americano." },
];

export const orders = [
  { id: 1, name: "Trefor Balentyne", productsList: [{ productID: 1, quantity: 2 }, { productID: 2, quantity: 2 }], amount: 1004.13, orderDate: "17-12-2022" },
  { id: 2, name: "Trefor Balentyne", productsList: [{ productID: 1, quantity: 1 }, { productID: 2, quantity: 2 }], amount: 1450.53, orderDate: "30-07-2022" },
]

export const categories = [
  {id: 1, name: "Tipo", categoryValues: [ "Whisky Japonês", "Tennesse Whiskey", "Bourbon", "Scotch"]},
  {id: 2, name: "Marca", categoryValues: ["Jhonny Walker" , "Chivas", "Jack Daniels", "Ballantine's"]},
];