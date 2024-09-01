import React from "react";
// import { Link } from "react-router-dom";
import articleContent from "./article-content";
// import article from "./article-content";
//components
import Articlesss from "../components/Articlesss";
const ArticlesList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-grey-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articlesss Articles={articleContent} />
        </div>
      </div>
    </div>
  );
};
export default ArticlesList;
