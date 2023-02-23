import { users } from "../../data";
import { IUser } from "../../interfaces";

export default function Profile() {


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
        {
          Object.keys(profileLabels)
          .map((label, index) => 
            <article key={index}>
              <p>{profileLabels[label as keyof IUser]}</p>
              {
                Object.keys(userProfile)
                .filter(userkey => userkey === label)
                .map((user, i) => 
                  <p key={i}>{userProfile[user as keyof IUser]}</p>
                )
              }
              <button>Atualizar</button>
            </article>
        )}
      </section>
  );
}
