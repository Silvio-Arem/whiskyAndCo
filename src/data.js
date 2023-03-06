
export const users = [
  {"id":1,"name":"Trefor Balentyne","email":"tbalentyne0@twitpic.com","cpf":"532-51-0651","address":"69093 Jay Point", "userType": "cliente", "userOrders" : [1, 2]},
  {"id":2,"name":"Lucina Ovenell","email":"lovenell1@hp.com","cpf":"247-94-2389","address":"115 Armistice Center", "userType": "client", "userOrders" : []},
  {"id":3,"name":"Barnie Hoyland","email":"bhoyland2@macromedia.com","cpf":"315-35-7863","address":"65610 Coolidge Junction", "userType": "client", "userOrders" : []},
  {"id":4,"name":"Leandra Coslett","email":"lcoslett3@parallels.com","cpf":"806-48-1053","address":"919 7th Drive", "userType": "admin", "userOrders" : []},
  {"id":5,"name":"Filberto Pleaden","email":"fpleaden4@trellian.com","cpf":"746-48-1758","address":"7 Sunnyside Trail", "userType": "client", "userOrders" : []},
  {"id":6,"name":"Ruthy Tretwell","email":"rtretwell5@comsenz.com","cpf":"882-78-6865","address":"268 Jay Junction", "userType": "client", "userOrders" : []},
  {"id":7,"name":"Ambrosi Sparshutt","email":"asparshutt6@rambler.ru","cpf":"589-74-1802","address":"76 Leroy Center", "userType": "client", "userOrders" : []},
  {"id":8,"name":"Hakeem Mc Faul","email":"hmc7@mapy.cz","cpf":"283-08-0305","address":"479 Sullivan Crossing", "userType": "client", "userOrders" : []},
  {"id":9,"name":"Joel Bromehed","email":"jbromehed8@etsy.com","cpf":"573-72-4332","address":"7 Ruskin Crossing", "userType": "client", "userOrders" : []},
  {"id":10,"name":"Charmine Johanssen","email":"cjohanssen9@about.com","cpf":"447-93-6389","address":"4506 Charing Cross Hill", "userType": "admin", "userOrders" : []},
];

export const products = [
  {"id": 1, "name": "Whiskey Woodford Reserve 750ml", "category": "Tennessee Whiskey", "img": "", "price": 185.91, "description": "Woodford Reserve é um luxuoso bourbon, cuidadosamente produzido à mão em pequenos lotes na Woodford Reserve Distillery. Tradicional desde 1812, é a destilaria mais antiga dos Estados Unidos. Triplamente destilada e envelhecida sob medida ao longo do tempo em barris de carvalho branco americano. É o unico bourbon do mundo a ter barris criados especificamente para sua produção. O mashbill para Woodford Reserve apresenta uma elevada porcentagem de centeio: 72% do milho, 18% de centeio e 10% de malte."},
  {"id": 2, "name": "Whisky Suntory Hibiki Harmony 700ml", "category": "Whisky Japonês", "img": "", "price": 632.31, "description": "Luminoso, delicado, de uma transparência que revela complexidade. O Whisky Hibiki Harmony é uma bebida leve com notas de cascas de laranja e chocolate branco que ajuda a torná-lo um whisky sedutor. Ele é formado por grãos e maltes do Japão que ajuda a fazer dele uma bebida que representa estações do país."},
];

export const orders = [
  {"id":1,"name":"Trefor Balentyne", "productsList": [{"productID": 1, "quantity": 2}, {"productID": 2, "quantity": 2}], "totalPrice": 1004.13, "orderDate":"17-12-2022"},
  {"id":2, "name":"Trefor Balentyne", "productsList": [{"productID": 1, "quantity": 1}, {"productID": 2, "quantity": 2}], "totalPrice": 1450.53, "orderDate":"30-07-2022"},
]

export const categories = [
  {id:1, name: "Tipo", categoryTypes: [ "Whisky Japonês", "Tennesse Whiskey", "Bourbon", "Scotch"]},
  {id: 2, name: "Marca", categoryTypes: ["Jhonny Walker" , "Chivas", "Jack Daniels", "Ballantine's"]},
];