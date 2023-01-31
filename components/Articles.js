import React from "react";

let props; //Used to hold props for the rest of the script to use.
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
//----------- --------- ----------  ------------
//External function ---------:
function deleteArticle(article) {
  //Used to delete an article of choice.
  const { setArticles } = props;
  setArticles({ type: "DELETE", payload: article }); //Delete an article.
}

function showArticles(articles) {
  //Used to show any articles in the array.

  return articles.map((article) => {
    //Map over each article
    return (
      <div className="article" key={article.article_id}>
        <div>
          <h3>{article.title.trim()}</h3>
          <p className="topic">topic: {article.topic.trim()}</p>
          <p className="articleText">{article.text.trim()}</p>
          <button
            id="delete_button"
            onClick={() => {
              //on click, delete an article
              deleteArticle(article);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
}

//---Main component:-----
const Articles = (p) => {
  //Main main
  props = p; //Update the main variable for the rest of the script to use.

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
