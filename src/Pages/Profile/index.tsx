import { useState } from "react";
import { users } from "../../data";
import { IUser } from "../../interfaces";

export default function Profile() {

  const [ updateProfile, setUpdateProfile ] = useState(true);

  const profileLabels: IUser = {
    name: "Nome Completo",
    email: "Email",
    cpf: "CPF",
    address: "Endereço",
    userType: "Tipo do Usuário"
  };

  const userProfile: IUser = users[Math.floor(Math.random()*50)];

  return (
      <section>
        <h3>Dados Pessoais:</h3>
        <form>
        {
          Object.keys(profileLabels)
          .map((label, index) =>
            <article key={index}>
              <label>{profileLabels[label as keyof IUser]}</label>
              {
                Object.keys(userProfile)
                .filter(userkey => userkey === label)
                .map((user, i) =>
                  updateProfile
                  ? <p key={i}>{userProfile[user as keyof IUser]}</p>
                  : <input type="text" />
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
