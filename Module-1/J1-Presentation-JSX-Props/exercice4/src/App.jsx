import './App.css'
import Student from './student.jsx'

function App() {
  const students = [
    { notes: [12, 11, 10], name: "Alan" },
    { notes: [18, 10, 19], name: "Alice" },
    { notes: [10, 9, 11], name: "Bernard" },
    { notes: [11, 17, 19], name: "Sophie" },
  ];

  return (
    <section>
      <h2>Étudiant-e-s</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Student name={student.name} notes={student.notes} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;

