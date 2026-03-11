import { useState } from 'react';

const User = () => {
  const [status, setStatus] = useState({
    firstName: "Aurore",
    lastName: "Gicquel",
    connected: false 
  });

  let message;
  if (status.connected === true) {
    message = "En Ligne";
  } else {
    message = "Hors Ligne";
  }

  return (
    <article>
      <h2>{status.firstName} {status.lastName}</h2>
      <p>{message}</p>

      <button onClick={() => setStatus({...status, connected: !status.connected})}>
        Connexion / Déconnexion
      </button>
    </article>
  );
}

export default User;
