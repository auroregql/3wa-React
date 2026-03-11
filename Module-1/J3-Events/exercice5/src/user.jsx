import { useState } from 'react';

const User = () => {
  const [user, setUser] = useState({
    firstName: "Prénom",
    lastName: "Nom",
    loggedIn: false
  });

  let message;
  if (user.loggedIn === true) {
    message = "En Ligne";
  } else {
    message = "Hors Ligne";
  }

  return (
    <li>
      <article>
        <h2>{user.firstName} {user.lastName}</h2>
        <p>{message}</p>
        <button onClick={() => setUser({ ...user, loggedIn: !user.loggedIn })}>
          Connexion / Déconnexion
        </button>
      </article>
    </li>
  );
}

export default User;
