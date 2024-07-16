import videosDB from '../db/videos.json'
import tagsDB from '../db/tags.json'

export class VideosService {
    getVideos() {
        const videos = this.loadVideos()
        return tagsDB.map((tag) => ({
          ...tag,
          videos: videos.filter((video) => video.tagId === tag.id),
        }))
    }

    createVideo(newVideo) {
        const videos = this.loadVideos()
        videos.push(newVideo)
        localStorage.setItem('videos',JSON.stringify(videos))
    }

    updateVideo(video) {
        const videos = this.loadVideos().map((x)=>x.id===video.id?video:x)
        localStorage.setItem('videos',JSON.stringify(videos))
    }

    deleteVideo(videoId) {
      const videos = this.loadVideos().filter(x=>x.id!==videoId)
      localStorage.setItem('videos',JSON.stringify(videos))
      return videos;
    }

    loadVideos() {
        let videosJson = localStorage.getItem("videos");
        if (!videosJson) {
          videosJson = JSON.stringify(videosDB);
          localStorage.setItem('videos',videosJson)
        }
        return JSON.parse(videosJson)
    }
}