import React, { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import "./styles.css";
import { VideosContext } from "../../contexts/videosContext";
import tags from "../../db/tags.json";
import { VideosService } from "../../services/videosService";

export default function EditVideo({ video, isOpen, setIsOpen }) {
  const { setData } = useContext(VideosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tagId = formData.get("tagId");
    const image = formData.get("image");
    const url = formData.get("url");
    const description = formData.get("description");
    const newVideo = {
      id: video.id,
      title,
      tagId: Number(tagId),
      image,
      url,
      description,
    };
    const videosService = new VideosService();
    videosService.updateVideo(newVideo);
    setData(videosService.getVideos());
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      overlayClassName="ReactModal__Overlay"
      className="modal"
    >
      <button className="exit-button" onClick={() => setIsOpen(false)}>
        x
      </button>
      <h1 className="form-title">Editar card</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="title">Título</label>
          <input defaultValue={video.title} name="title" />
        </div>

        <div className="form-item">
          <label htmlFor="tagId">Categoria</label>
          <select name="tagId" required defaultValue={video.tagId}>
            {tags.map((tag) => (
              <option value={tag.id}>{tag.label}</option>
            ))}
          </select>
        </div>

        <div className="form-item">
          <label htmlFor="image">Imagen</label>
          <input defaultValue={video.image} name="image" />
        </div>

        <div className="form-item">
          <label htmlFor="url">Video</label>
          <input defaultValue={video.url} tagId="url" />
        </div>

        <div className="form-item">
          <label htmlFor="description">Descripción</label>
          <textarea defaultValue={video.description} name="description" />
        </div>

        <div className="actions">
          <button type="submit" className="accent">
            guardar
          </button>
          <button type="reset">limpiar</button>
        </div>
      </form>
    </ReactModal>
  );
}
