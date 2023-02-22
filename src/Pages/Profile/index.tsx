import { users } from "../../data";

export default function Profile() {

  type User = {
    id?: number,
    name: string,
    email: string,
    cpf: string,
    address: string,
    userType?: string
  }

  const profileLabels: User = {
    name: "Nome Completo",
    email: "Email",
    cpf: "CPF",
    address: "Endereço",
    userType: "Tipo do Usuário"
  };

  const userProfile: User = users[Math.floor(Math.random()*50)];

  return (
      <section>
        <h3>Dados Pessoais:</h3>
        {
          Object.keys(profileLabels)
          .map((label, index) => 
            <article key={index}>
              <p>{profileLabels[label as keyof User]}</p>
              {
                Object.keys(userProfile)
                .filter(userkey => userkey === label)
                .map((user, i) => 
                  <p key={i}>{userProfile[user as keyof User]}</p>
                )
              }
              <button>Atualizar</button>
            </article>
        )}
      </section>
  );
}
