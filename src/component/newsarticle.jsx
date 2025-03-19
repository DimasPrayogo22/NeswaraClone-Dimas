import React from "react";
import myImg from "../assets/microdata.jpeg";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const latestNews = [
  {
    title: "Seorang Kakek di Lampung Timur Dianiaya Menantu Hingga Patah Tulang",
    description: "Kakek di Lampung Dianiaya Menantu hingga mengalami patah tulang...",
    image: "https://neswara.id/file_manager/berita/1736952527-images (4).jpeg",
    date: "15 Jan 2025",
    link: "https://neswara.id/view/seorang-kakek-di-lampung-timur-dianiaya-menantu-hingga-patah-tulang",
  },
  {
    title: "Kombes Pol Alfret Jacob Tilukay Resmi Jabat Kapolresta Bandarlampung",
    description: "Neswara, Bandarlampung: Kombes Pol Alfret Jacob Tilukay resmi menjabat sebagai Kapolresta Bandar Lampung. Dirinya menggantikan Kombes Pol Abdul Waras.",
    image: "https://neswara.id/file_manager/berita/1737099350-IMG-20250117-WA0102.jpg",
    date: "14 Jan 2025",
    link: "https://neswara.id/view/kombes-pol-alfret-jacob-tilukay-resmi-jabat-kapolresta-bandarlampung",
  },
  {
    title: "Dukung Ketahanan Pangan, Satbrimob Polda Lampung Tanam Jagung",
    description: "Neswara, Bandarlampung: Sebagai wujud dukungan terhadap program Asta Cita Presiden, Batalyon C Pelopor Satuan Brimob Polda Lampung terus menunjukkan komitmen aktifnya dalam pengelolaan ketahanan pangan. ",
    image: "https://neswara.id/file_manager/berita/1736926587-IMG-20250115-WA0042.jpg",
    date: "13 Jan 2025",
    link: "https://neswara.id/view/dukung-ketahanan-pangan-satbrimob-polda-lampung-tanam-jagung",
  },
  {
    title: "Empat Provokator Diamankan Dalam Pengosongan Lahan PTPN VII",
    description: "eswara, Lampung Selatan: Pengosongan lahan milik PTPN VII yang berlokasi di Kampung Pelita, Desa Sidosari, Kecamatan Natar, Lampung Selatan, berlangsung pada Senin (13/1/2025).",
    image: "https://neswara.id/file_manager/berita/1736925778-ptahJdS07wj3HlOES8fdwqF7ljelueCXyECRjf3m.jpg",
    date: "12 Jan 2025",
    link: "https://neswara.id/view/empat-provokator-diamankan-dalam-pengosongan-lahan-ptpn-vii",
  },
  {
    title: "Inovasi Baru di Tahun 2025: Teknologi AI Membantu Produktivitas Harian",
    description: "Jakarta, 9 Januari 2025 – Perkembangan teknologi kecerdasan buatan (AI) semakin mempertegas perannya dalam berbagai aspek kehidupan manusia. Tahun ini, inovasi terbaru bernama AI",
    image: "https://neswara.id/file_manager/berita/1736391139-aii.jpeg",
    date: "12 Jan 2025",
    link: "https://neswara.id/view/inovasi-baru-di-tahun-2025-teknologi-ai-membantu-produktivitas-harian",
  },
];

const popularNews = [
  { title: "Real Madrid Juara Lagi!", date: "10 Jan 2025", comments: 5, link: "#" },
  { title: "Harga Minyak Dunia Naik", date: "9 Jan 2025", comments: 12, link: "#" },
  { title: "BTS Rilis Lagu Baru", date: "8 Jan 2025", comments: 20, link: "#" },
  { title: "Startup Indonesia Go International", date: "7 Jan 2025", comments: 8, link: "#" },
];

const NewsArticle = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Berita Terbaru</h2>
          <div className="space-y-4">
            {latestNews.map((news, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
                <div className="w-full md:w-1/3 h-40 flex-shrink-0">
                  <img src={news.image} alt="News Thumbnail" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-col justify-between flex-grow mt-4 md:mt-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    <a href={news.link} className="hover:text-primary transition duration-200">
                      {news.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{news.description}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{news.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <div className="grid place-items-center">
            <img src={myImg} alt="Centered" className="object-cover w-60 max-w-xs" />
          </div>
          <p className="text-gray-400 font-bold text-center m-5 text-2xl">Microdata Indonesia</p>
          <h2 className="text-xl text-center font-bold text-gray-900 dark:text-white mb-4">Popular Now</h2>
          <div className="space-y-4">
            {popularNews.map((news, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-md font-bold text-gray-900 dark:text-white">
                  <a href={news.link} className="hover:text-primary transition duration-200">
                    {news.title}
                  </a>
                </h3>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <span>{news.date}</span>
                  <span>{news.comments} Komentar</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-center font-bold text-gray-400">FOLLOW @NESWARA</p>
            <div className="flex flex-col space-y-2">
              <input id="email" type="email" placeholder="your email" className="w-full p-2 border rounded-lg" />
              <button className="mt-2 p-2 bg-black text-white rounded-lg hover:bg-gray-600">SUBSCRIBE NOW</button>
            </div>
            <div className="flex space-x-4 mt-4 justify-center">
              <FaFacebook className="text-gray-400 hover:text-black" size={30} />
              <FaTwitter className="text-gray-400 hover:text-black" size={30} />
              <FaInstagram className="text-gray-400 hover:text-black" size={30} />
              <FaYoutube className="text-gray-400 hover:text-black" size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArticle;
