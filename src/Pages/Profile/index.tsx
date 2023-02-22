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
        <>
        <h3>Dados Pessoais:</h3>
        {
          Object.keys(profileLabels)
          .map((label, index) => 
            <article key={index}>
              <label htmlFor={label}>{profileLabels[label as keyof User]}</label>
              {
                Object.keys(userProfile)
                .filter(userkey => userkey === label)
                .map((user, i) => 
                  <p key={i}>{userProfile[user as keyof User]}</p>
                )
              }
            </article>
        )}
        </>
      </section>
  );
}

// Object.keys(Labels)
//         .map((label, index) => 
//           <article 
//             className='
//               h-12 w-full flex flex-row items-center justify-between 
//               [&>*]:px-2odd:bg-slate-50 even:bg-rose-50'
//             key={index}
//           >
//             <label key={index} className="w-full italic text-base sm:text-lg text-slate-600" htmlFor={label}>
//               {Labels[label]}
//             </label>
//             {
//               Object.keys(userProfile)
//               .filter((key) => key === label)
//               .map((userField, i) => 
//                 <p key={i} className="w-full text-sm sm:text-base font-medium text-slate-600 ">
//                   {userProfile[userField]}
//                 </p>
//               )
//             }
//             <button>
//               <CiEdit className='h-6 w-6 sm:h-8 sm:w-8 text-slate-700'/>
//             </button>
//           </article> 
//         )