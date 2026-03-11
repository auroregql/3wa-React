import './App.css'
import { skills, posts } from "./data.js";

function App() {
  return (
    <>
      <h1>Joan Doe</h1>

      <section className="skills">
        <h2>Compétences</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.name} : {skill.grade} / 5
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Publications</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <article>
                <img src={post.image} alt={post.alt} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
