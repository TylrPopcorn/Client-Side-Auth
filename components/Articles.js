import React, { useEffect } from "react";
//External function
const getArticles = (props) => {
  const { setArticles } = props;
  const initialArticles = [
    {
      article_id: 1,
      topic: "random",
      title: "article 1",
      text: "It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.",
    },
  ];

  setArticles(initialArticles);
};

const Articles = (props) => {
  const { articles, setArticles } = props;

  useEffect(() => {
    getArticles({ setArticles: setArticles });
  }, [setArticles]);

  return (
    <div className="articles">
      <h2> Articles </h2>
      {articles.length > 0 ? (
        articles.map((article) => {
          return (
            <div className="article" key={article.article_id}>
              <div>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <p>topic: {article.topic}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1> None </h1>
      )}
    </div>
  );
};

export default Articles;
