import React from "react";
import "./styles.css";
import VideoCard from "../video-card";

export default function Categories({ tag }) {
  return (
    <section className="section">
      <div
        className="label"
        style={{
          backgroundColor: tag.color,
        }}
      >
        <p>{tag.label}</p>
      </div>
      <div className="videos">
        {tag.videos.map((video) => (
          <VideoCard key={video.id} video={video}></VideoCard>
        ))}
      </div>
    </section>
  );
}
