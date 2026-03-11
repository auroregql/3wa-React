import { useState } from "react";

const User = () => {
  const [status, setStatus] = useState(false);

  let message;

  if (status === true) {
    message = "En Ligne";
  } else {
    message = "Hors Ligne";
  }

  return (
    <>
      <h2>Mari Doucet</h2>
      <p>{message}</p>
    </>
  );
};

export default User;

