import { createContext, useEffect, useState } from "react";
import { VideosService } from "../services/videosService";

export const VideosContext = createContext();

export const VideosContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // useEffect to simulate fetching videos
  useEffect(() => {
    setData(new VideosService().getVideos())
  }, []);

  return (
    <VideosContext.Provider value={{data: data, setData: setData}}>
      {children}
    </VideosContext.Provider>
  );
};