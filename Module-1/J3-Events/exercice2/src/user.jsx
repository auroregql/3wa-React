import { useState } from 'react';

let User = () => {
    const [status, setStatus] = useState(false);
    let message;
    
    if (status === true) {
    message = "En Ligne";
  } else {
    message = "Hors Ligne";
  }
    return (
        <article>
            <h2>Mari Doucet</h2>
            <p>{message}</p>
             <button onClick={() => setStatus(!status)}> Connecter </button>
        </article>
        )
}

export default User;