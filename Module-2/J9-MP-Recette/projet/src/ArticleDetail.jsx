function ArticleDetail({ article, onBack }) {
  return (
    <div className="article-detail">
      <button className="back-link" onClick={onBack}>← Retour à l'accueil</button>

      <span className="category">{article.category}</span>
      <h2>{article.title}</h2>
      <p className="date">Publié le {article.date}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
