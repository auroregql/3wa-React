import { useState } from "react";

const User = () => {
  const [userState, setUserState] = useState({
    status: false,
    role: "Anonyme",
  });

  let statusMessage;

  if (userState.status === true) {
    statusMessage = "En Ligne";
  } else {
    statusMessage = "Hors Ligne";
  }

  return (
    <article>
      <h2>Mari Doucet</h2>
      <h3>{userState.role}</h3>
      <p>{statusMessage}</p>
    </article>
  );
};

export default User;
