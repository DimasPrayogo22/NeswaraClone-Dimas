import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Footer from "./component/footer";
import HeroSection from "./component/herosection";
import NewsArticle from "./component/newsarticle";
import LiveNewsSection from "./component/livenewsection";
import LatestNewsSection from "./component/latestnewssection.jsx";
import myImage from "./assets/gambar1.jpg";
import myImage2 from "./assets/gambar2.jpg";

const articles = [
  {
    date: "2025-01-06 10:24:24",
    title: "OPTIMISME EKONOMI INDONESIA DI TENGAH TANTANGAN GLOBAL",
    image: "https://neswara.id/file_manager/berita/1736952527-images (4).jpeg",
  },
  {
    date: "2025-01-04 07:55:44",
    title: "CHATGPT BILANG: CHATGPT SEMANGAT BARU DALAM...",
    image: "https://neswara.id/file_manager/berita/1736952527-images (4).jpeg",
  },
  {
    date: "2025-01-05 23:02:04",
    title: "PEMULIHAN EKONOMI INDONESIA: PELUANG DAN TANTANGAN DI...",
    image: "https://neswara.id/file_manager/berita/1736952527-images (4).jpeg",
  },
];

const categories = ["SMK", "SMA", "REAL MADRID", "PASAR", "MODERN"];

const NewsPortal = () => {
  return (
    <div className="bg-gray-300">
      {/* Header */}
      <header className="flex justify-between items-center p-9 bg-white shadow-md">
      <img src={myImage} alt="Deskripsi Gambar" width="150" />
        <nav className="space-x-8">
          <a href="#" className="text-black font-bold">
            LIFESTYLE
          </a>
          <a href="#" className="text-black font-bold">
            EDUCATION
          </a>
          <a href="#" className="text-black font-bold">
            REGION
          </a>
          <a href="#" className="text-black font-bold">
            SPORT
          </a>
          <a href="#" className="text-black font-bold">
            TOUR & TRAVEL
          </a>
          <a href="#" className="text-black font-bold">
            NATIONAL
          </a>
          <a href="#" className="text-black font-bold">
            BUSINESS
          </a>
        </nav>
        <div className="flex space-x-4">
          <FaUser className="text-gray-700 cursor-pointer" />
          <FaSearch className="text-gray-700 cursor-pointer" />
        </div>
      </header>

      {/* Categories */}
      <div className="flex space-x-2 mt-4 overflow-x-auto justify-center gap-10 bg-grey p-2 rounded shadow">
        {categories.map((cat, index) => (
          <button key={index} className="px-20 py-2 bg-white rounded cursor-pointer font-bold">
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-4 mt-6 px-28">
        {/* Left Section */}
        <div className="col-span-1">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-4">
              <img src={article.image} alt="news" className="w-full h-[100px] rounded object-cover" />
              <p className="text-xs text-gray-500 mt-2">{article.date}</p>
              <h2 className="text-sm font-semibold mt-1">{article.title}</h2>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="col-span-1 flex justify-center items-center">
          <div className="bg-white rounded shadow w-full text-center">
          <img src={myImage2} alt="Deskripsi Gambar"/>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-800 text-white p-12 rounded shadow mb-4 flex justify-center ">
              <img src={myImage} alt="Deskripsi Gambar" width="250" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-8">
        <div className="bg-white w-full py-6 mx-18 text-center rounded-lg shadow">
          <p className="text-gray-700 text-sm md:text-base">Ingin mengiklankan produk Anda? Hubungi kami untuk menampilkan iklan Anda di sini!</p>
        </div>
      </div>

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
