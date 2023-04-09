export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
  stock: number;
}

//Una interface es como un contrato o una firma que hacemos cuando vamos a operar con products

//declara una serie de metodos y propiedades que deben ser implementadas por una o mas clases
//las interfaces vienen a suplir la imposiblidad de herencia multiple

//sirve para modelar datos
// {
//   "id": 1,
//   "name": "Essential TypeScript 4: From Beginner to Pro",
//   "price": 45,
//   "description": "Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java.",
//   "categoryId": 1,
//   "stock": 0
// },
