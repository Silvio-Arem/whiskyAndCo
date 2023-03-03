import { IProduct } from "../../interfaces";
import { products } from "../../data";

export default function Products() {

  const product = products.map((item: IProduct) => (
    <div key={item.id} className="products__cards">
      <img src={item.img} alt={item.name} />
      <div className="products__cards-body">
        <h5>{item.name}</h5>
        <p>Preço: {item.price}</p>
        <p>Descrição: {item.description}</p>
      </div>
    </div>
  ))


  return (
    <>
      <section className="Products">
        {product} 
      </section>
    </>
  );
}