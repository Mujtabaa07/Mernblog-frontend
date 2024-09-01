import React, { useState, useEffect } from "react";

// import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import NotFound from "./NotFound";
//components
import Articlesss from "../components/Articlesss";
import CommentsList from "../components/commentList";
import AddCommentForm from "../components/AddCommentForm";
const Articles = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articlesInfo, setArticleInfo] = useState({ comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound>Article does not exists</NotFound>;
  const otherAritcles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-grey-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articlesInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-grey-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4 ">
        <Articlesss Articles={otherAritcles} />
      </div>
    </>
  );
};
export default Articles;
