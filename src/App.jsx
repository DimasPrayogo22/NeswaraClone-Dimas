import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Footer from "./component/footer";
import HeroSection from "./component/herosection";
import NewsArticle from "./component/newsarticle";
import LiveNewsSection from "./component/livenewsection";
import LatestNewsSection from "./component/latestnewssection.jsx";
import NewsSection from "./component/newssection.jsx";
import Navbar from "./component/navbar.jsx";

const NewsPortal = () => {
  return (
    <div className="bg-gray-300">
      <Navbar />

      <NewsSection />

      <div className="bg-gray px-19 py-14">
        <h2 className="text-xl font-bold">TRENDING THIS WEEK</h2>
      </div>

      <HeroSection />

      <div className="bg-gray px-19 py-14">
        <h2 className="text-xl font-bold">Terkini</h2>
      </div>

      <NewsArticle />

      <LiveNewsSection />

      <LatestNewsSection />

      <Footer />
    </div>
  );
};

export default NewsPortal;
