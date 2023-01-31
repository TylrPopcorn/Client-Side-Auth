//Reducer to help regulate Articles state
const ArticlesReducer = (state, action) => {
  switch (
    action.type //Switch statement
  ) {
    case "ADD": {
      //To add an article
      state.push(action.payload);
      return state;
    }

    case "DELETE": {
      const newState = state.filter((item) => {
        //filter through the articles
        return item.article_id !== action.payload.article_id; //return any article that is NOT the specified article
      });
      return newState;
    }

    default: //return regular state if command not found
      return state;
  }
};

export default ArticlesReducer; //export
