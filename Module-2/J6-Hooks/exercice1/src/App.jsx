import { useState, useEffect } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import './App.css'

function App() {
  // 1️⃣ Initialisation du state à partir du localStorage si possible
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('appState');
    return savedState ? JSON.parse(savedState) : { page: "blog", post: null };
  });

  // 2️⃣ Sauvegarde du state à chaque modification
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]); // ce useEffect se déclenche à chaque changement de state

  function showPost(post) {
    setState({ page: "post", post: post });
  }

  function backToBlog(event) {
    event.preventDefault();
    setState({ page: "blog", post: null });
  }

  if (state.page === "blog") {
    return <Blog showPost={showPost} />;
  } else {
    return (
      <>
        <a href="index.html" className="back-link" onClick={backToBlog}>← Retour à l'accueil</a>
        <Post post={state.post} />
      </>
    );
  }
}

export default App;
