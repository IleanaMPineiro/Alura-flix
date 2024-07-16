import React, { useContext, useState } from "react";
import "./styles.css";
import { VideosService } from "../../services/videosService";
import { VideosContext } from "../../contexts/videosContext";
import EditVideo from "../edit-video";
import tags from "../../db/tags.json";

export default function VideoCard({ video }) {
  const [editModal, setEditModal] = useState(false);
  const { setData } = useContext(VideosContext);
  const tag = tags.find((tag) => tag.id === video.tagId);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditModal(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const videosService = new VideosService();
    videosService.deleteVideo(video.id);
    setData(videosService.getVideos());
  };

  return (
    <>
      <a
        className={`video-card`}
        style={{
          border: `5px solid ${tag.color}`,
        }}
        href={video.url}
      >
        <div
          className="video-image"
          style={{
            "--color": tag.color,
          }}
        >
          <img src={video.image} alt={video.title}></img>
        </div>
        <div
          className="actions"
          style={{
            "--color": tag.color,
          }}
        >
          <button className="action-button delete" onClick={handleDelete}>
            BORRAR
          </button>
          <button className="action-button edit" onClick={handleEdit}>
            EDITAR
          </button>
        </div>
      </a>
      <EditVideo
        isOpen={editModal}
        setIsOpen={setEditModal}
        video={video}
      ></EditVideo>
    </>
  );
}
