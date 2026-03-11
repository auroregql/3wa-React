
//importation du modele de carte et des données//
import PostCard from "./PostCard.jsx";
import data from "./data.js";

//Déclarer une variable blog qui retourne les données en format grille de tableau//
const Blog = (props) => {
    return (
        <div className="blog-grid">
            {
                data.map((post, index) =>
                    <PostCard key={index} post={post} showPost={props.showPost}/>
                )
            }
        </div>
    );
}

export default Blog;