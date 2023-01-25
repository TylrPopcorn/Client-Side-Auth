import React, { useEffect } from "react";
export const initialArticles = [
  {
    article_id: 1,
    topic: "random",
    title: "article 1",
    text: "It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.",
  },

  {
    article_id: 2,
    topic: "random",
    title: "article 2",
    text: "He found the chocolate covered roaches quite tasty.",
  },
];

//External function
const getArticles = (props) => {
  const { setArticles } = props;

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
                <h3>{article.title.trim()}</h3>
                <p className="topic">topic: {article.topic.trim()}</p>
                <p className="articleText">{article.text.trim()}</p>
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
