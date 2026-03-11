//Déclaration d'une carte//

const PostCard = (props) => {

//Fonction d'un evenement : click a la main sur la carte//
    function handleClick(event)
    {
        //Le remettre par défaut//
        event.preventDefault();
        props.showPost(props.post);
    }
//Quand il y a le click ca retourne le détails de l'article//
    return (
        <article className="card">
            <span className="category">{ props.post.category }</span>
            <h3>{ props.post.title }</h3>
            <p className="date">{ props.post.date }</p>
            <p>{ props.post.excerpt }</p>
            <a href="article.html" className="btn" onClick={handleClick}>Lire la suite →</a>
        </article>
    );
}

export default PostCard;