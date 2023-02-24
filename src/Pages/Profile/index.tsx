import { useState } from "react";
import { users } from "../../data";
import { IUser } from "../../interfaces";

export default function Profile() {

  const [ updateProfile, setUpdateProfile ] = useState(true);

  enum Labels {
    name = "Nome Completo",
    email = "Email",
    cpf = "CPF",
    address = "Endereço",
    userType = "Tipo do Usuário"
  }

  const userData: IUser = users[Math.floor(Math.random()*50)];

  return (
      <section>
        <h3>Dados Pessoais:</h3>
        <form>
        {
          (Object.keys(Labels) as Array<keyof typeof Labels>)
          .map((label, indexL) =>
            <article key={indexL}>
              <label>{Labels[label]}</label>
              {
                Object.keys(userData)
                .filter(fieldKey => fieldKey === label)
                .map((userField, indexF) =>
                  updateProfile
                  ? <p key={indexF}>{userData[userField as keyof IUser]}</p>
                  : <input key={indexF} type="text" />
                )
              }
            </article>
          )}
          {
            updateProfile
            ? <button onClick={() => setUpdateProfile(!updateProfile)}>Atualizar Dados</button>
            : <input type="submit" value="Salvar" />
          }
        </form>
      </section>
  );
}
