import React from "react";
import "./styles.css";

export default function VideoCard({ video }) {
  const handleEdit = (e) => {
    e.preventDefault();
  };
  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <a className="video-card" href={video.url}>
        <img className="video-image" src={video.image} alt={video.title}></img>
        <div className="actions">
          <button className="action-button" onClick={handleDelete}>
            BORRAR
          </button>
          <button className="action-button" onClick={handleEdit}>
            EDITAR
          </button>
        </div>
      </a>
    </>
  );
}
