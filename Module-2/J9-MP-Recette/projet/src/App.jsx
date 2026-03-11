import { useState } from 'react';
import articlesData from './articles.json';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import './App.css'; // ✅ Assure-toi que App.css est bien importé

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const selectedArticle = articlesData.find(
    (article) => article.id === selectedArticleId
  );

  return (
    <div className="container">
      <header>
        <h1>Mon blog React</h1>
      </header>

      {selectedArticleId === null ? (
        <ArticleList
          articles={articlesData}
          onSelectArticle={setSelectedArticleId}
        />
      ) : (
        <ArticleDetail
          article={selectedArticle}
          onBack={() => setSelectedArticleId(null)}
        />
      )}
    </div>
  );
}

export default App;

