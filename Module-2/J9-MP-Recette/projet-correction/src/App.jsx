//importation de state et des pages jsx et css//

import { useState } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import './App.css'

//Déclaration des states du blog et du post//
function App() {
    const [state, setState] = useState({ page: "blog", post:null });

    function showPost(post)
    {
        let newState = { page: "post", post:post };
        setState(newState);
    }
 //retour au blog si le statut de la page est sur blog sinon  si il y a un click sur un post, afficher le lien//
    function backToBlog(event)
    {
        event.preventDefault();
        let newState = { page: "blog", post:null };
        setState(newState);
    }

    if(state.page === "blog")
    {
        return (
            <>
                <Blog showPost={showPost}/>
            </>
        )
    }
    else
    {
        return (
            <>
                <a href="index.html" className="back-link" onClick={backToBlog}>← Retour à l'accueil</a>
                <Post post={state.post}/>
            </>
        )
    }

}

export default App