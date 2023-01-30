import React from "react";

export const initialArticles = [
  //All of the articles.
  {
    article_id: 1, //id
    topic: "random", //topic
    title: "article 1", //title
    text: "It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.", //body/text
  },

  {
    article_id: 2,
    topic: "random",
    title: "article 2",
    text: "He found the chocolate covered roaches quite tasty.",
  },
];

//External function ---------:
function showArticles(articles) {
  console.log(articles, "<-----");

  return articles.map((article) => {
    return (
      <div className="article" key={article.article_id}>
        <div>
          <h3>{article.title.trim()}</h3>
          <p className="topic">topic: {article.topic.trim()}</p>
          <p className="articleText">{article.text.trim()}</p>
        </div>
      </div>
    );
  });
}

//---Main component:-----
const Articles = (props) => {
  //Main main
  const { articles } = props; //props passed down from app.

  return (
    //html
    <div className="articles">
      <h2> Articles </h2> {/* Tittle*/}
      {articles.length > 0 ? (
        showArticles(articles)
      ) : (
        <h2> None </h2> /* Title */
      )}
    </div>
  );
};

export default Articles; //exports.
