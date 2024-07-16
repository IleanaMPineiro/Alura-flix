import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { VideosContextProvider } from "./contexts/videosContext";
import Layout from "./components/layout";
import Home from "./pages/home";
import NewVideo from "./pages/new-video";

export function App(props) {
  return (
    <BrowserRouter>
      <VideosContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="new-video" element={<NewVideo />} />
          </Route>
        </Routes>
      </VideosContextProvider>
    </BrowserRouter>
  );
}
