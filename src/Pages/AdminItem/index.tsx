import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Data, User_labels, Product_labels, Category_labels, Order_labels } from "../../interfaces";
import { users, products, categories, orders } from "../../data";

export const AdminItem = () => {
  const { state } = useLocation();

  const [item, setItem] = useState<Data | null>(null);
  const [itemType, setItemType] = useState<string>("");
  const [labels, setLabels] = useState ({});
  const [ updateProfile, setUpdateProfile ] = useState(false);

  const configItem = () => {
    const index = state.id--;

    switch (state.dataType) {
      case "users":
        setLabels(User_labels);
        setItem(users[index]);
        setItemType("USUÁRIO");
        break;

      case "products":
        setLabels(Product_labels);
        setItem(products[index]);
        setItemType("PRODUTO");
        break;

      case "categories":
        setLabels(Category_labels);
        setItem(categories[index]);
        setItemType("CATEGORIA");
        break;

      case "orders":
        setLabels(Order_labels);
        setItem(orders[index]);
        setItemType("PEDIDOS");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    configItem();
  }, []);

  console.log(User_labels);

  return (
    <section>
      <h3>Tipo: {itemType}</h3>
      <p>Informações:</p>
      <form>
      {
        (Object.keys(labels) as Array<keyof typeof labels>)
        .map((label, index) =>
          <article key={index}>
            <label>{labels[label]}</label>
            {
              item !== null
              ? Object.keys(item).filter(itemKey => itemKey === label)
                  .map((itemField) => 
                    updateProfile
                    ? <input type="text" name={itemField}/>
                    : <p>{item[itemField as keyof Data]}</p>
                  )
              : <div>Dados não encontrados</div>
            }
          </article>
        )
      }
      {
        updateProfile
        ? <input type="submit" value="Salvar" />
        : <button onClick={() => setUpdateProfile(!updateProfile)}>Atualizar Dados</button>
      }
      </form>
    </section>
  );
};
