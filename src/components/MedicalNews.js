// src/components/MedicalNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MedicalNews.css';

const MedicalNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const articlesToDisplay = 5; // Number of articles to display

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Please try again later.');
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="medical-news">
      <h2>Latest Medical News</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="articles">
        {articles.slice(0, articlesToDisplay).map((article, index) => (
          <div key={index} className="article">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalNews;
