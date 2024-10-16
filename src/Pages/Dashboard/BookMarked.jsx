import { useEffect, useState } from "react";
import NewsCard from "../Shared/NewsCard/NewsCard";
import Loading from "../../Components/Loading/Loading";

const BookMarked = () => {
  const [bookedNews, setBookedNews] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const savedNews = JSON.parse(localStorage.getItem('savedNews')) || [];
    setBookedNews(savedNews);
    setLoading(false); 
  }, []);

  const handleRemoveNews = (index, cat) => {
    const updatedNews = bookedNews.filter(news => !(news.index === index && news.cat === cat));
    setBookedNews(updatedNews); // Update state immediately
    localStorage.setItem('savedNews', JSON.stringify(updatedNews)); // Also update localStorage
  };

  
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center">
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
