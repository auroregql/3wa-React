function ArticleList({ articles, onSelectArticle }) {
  return (
    <div className="blog-grid">
      {articles.map((article) => (
        <div
          key={article.id}
          className="card"
          onClick={() => onSelectArticle(article.id)}
          style={{ cursor: 'pointer' }} // pour voir que c'est cliquable
        >
          <span className="category">{article.category}</span>
          <h2>{article.title}</h2>
          <p className="date">{article.date}</p>
          <p>{article.excerpt}</p>
          <span className="btn">Lire la suite →</span>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;

