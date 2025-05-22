import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'animate.css';

import HomePage from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoPage from "./pages/VideoPage ";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/videos" element={<VideoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
