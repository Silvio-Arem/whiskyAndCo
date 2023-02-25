import { useState } from "react";
import { users } from "../../data";
import { IUser } from "../../interfaces";

export default function Profile() {

  const [ updateProfile, setUpdateProfile ] = useState(false);

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
          .map((label, index) =>
            <article key={index}>
              <label>{Labels[label]}</label>
              {
                Object.keys(userData)
                .filter(fieldKey => fieldKey === label)
                .map((userField) =>
                  updateProfile
                  ? <input type="text" name={userField}/>
                  : <p>{userData[userField as keyof IUser]}</p>
                )
              }
            </article>
          )}
          {
            updateProfile
            ? <input type="submit" value="Salvar" />
            : <button onClick={() => setUpdateProfile(!updateProfile)}>Atualizar Dados</button>
          }
        </form>
      </section>
  );
}
