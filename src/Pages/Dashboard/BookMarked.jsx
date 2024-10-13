import { useEffect, useState } from "react";
import NewsCard from "../Shared/NewsCard/NewsCard";

const BookMarked = () => {
  const [bookedNews, setBookedNews] = useState([]);

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
    setBookedNews(savedNews);
  }, []);

  const handleRemoveNews = (index, cat) => {
    const updatedNews = bookedNews.filter(news => !(news.index === index && news.cat === cat));
    setBookedNews(updatedNews); // Update state immediately
    localStorage.setItem('savedNews', JSON.stringify(updatedNews)); // Also update localStorage
  };

  return (
    <div>
      <div className="flex gap-3  flex-wrap ">
        {bookedNews.map(news => (
          <NewsCard 
            key={news.index}
            index={news.index}
            cat={news.cat}
            anews={news}
            booked={true}
            onRemove={handleRemoveNews} // Pass the callback to NewsCard
          />
        ))}
      </div>
    </div>
  );
};

export default BookMarked;
