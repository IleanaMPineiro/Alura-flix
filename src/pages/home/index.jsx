import React, { useContext } from "react";
import "./styles.css";
import Categories from "../../components/categories";
import mainArticleImage from "../../assets/main-article.jpeg";
import mainArticleBackground from "../../assets/main-article-bg.jpeg";
import { VideosContext } from "../../contexts/videosContext";

export default function Home() {
  const { data } = useContext(VideosContext);

  return (
    <>
      <div
        className="main-article"
        style={{ backgroundImage: mainArticleBackground }}
      >
        <div className="main-article-data">
          <div className="main-article-tag">FRONT END</div>
          <div className="main-article-title">Challenge React</div>
          <div className="main-article-description">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </div>
        </div>
        <img
          className="main-article-image"
          src={mainArticleImage}
          alt="main article"
        ></img>
      </div>
      <div className="categories">
        {data.map((tag) => (
          <Categories tag={tag} key={tag.id}></Categories>
        ))}
      </div>
    </>
  );
}
