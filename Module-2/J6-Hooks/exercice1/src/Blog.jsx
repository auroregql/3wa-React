// Blog.jsx
import { useState, useEffect } from "react";
import PostCard from "./PostCard.jsx";
import data from "./data.js";

const Blog = (props) => {
  const [posts, setPosts] = useState([]); // initialisation vide

  useEffect(() => {
    // On charge les données au premier rendu seulement
    setPosts(data);
  }, []); // tableau vide = exécuter qu'une seule fois

  return (
    <div className="blog-grid">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} showPost={props.showPost} />
      ))}
    </div>
  );
}

export default Blog;
