import './App.css'
import User from "./user.jsx";
function App() {
  let users = [
    {
        firstName : "Alain",
        lastName: "Terieur",
        email : "alain.terieur@inlook.com"
    },
    {
        firstName : "Alex",
        lastName: "Terieur",
        email : "alex.terieur@outlook.com"
    },
];

  return (
    <ul>
          {users.map((user, i) => <li key={i}><User identity={user} /></li>)}
      </ul>
  )
}

export default App
