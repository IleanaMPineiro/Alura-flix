import React, { useContext } from "react";
import "./styles.css";
import tags from "../../db/tags.json";
import { VideosService } from "../../services/videosService";
import { VideosContext } from "../../contexts/videosContext";

export default function NewVideo(props) {
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
      id: new Date().getTime(),
      title,
      tagId: Number(tagId),
      image,
      url,
      description,
    };
    const videosService = new VideosService();
    videosService.createVideo(newVideo);
    setData(videosService.getVideos());
  };
  return (
    <div className="form-page">
      <div className="page-title">
        <h1>Nuevo video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Crear Tarjeta</h2>
        <div className="form-body">
          <div className="form-item">
            <label htmlFor="title">Título</label>
            <input name="title" placeholder="ingrese el título" required />
          </div>

          <div className="form-item">
            <label htmlFor="tagId">Categoria</label>
            <select name="tagId" required>
              {tags.map((tag) => (
                <option value={tag.id}>{tag.label}</option>
              ))}
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="image">Imagen</label>
            <input
              name="image"
              placeholder="ingrese el enlace de la imagen"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="url">Video</label>
            <input
              name="url"
              placeholder="ingrese el enlace del video"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              placeholder="¿De qué se trata este vídeo?"
              required
            />
          </div>
          <div className="form-item"></div>
          <div className="form-item form-actions">
            <button className="accent-button">Guardar</button>
            <button type="reset">limpiar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
