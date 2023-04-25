import React, { useState, useEffect } from 'react';

function Report() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14391d98e10b47159644a06bab763f27')
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
      });
  }, []);

  return (
    <center className='card'>

      <h1 className='reporttitle'>REPORTS</h1>

      {news.map((article, index) => (
        <div key={index}>

          <img className='imgtag' src={article.urlToImage} alt={article.title} />
          <h2 className='cardtitle' >{article.title}</h2>
        </div>
      ))}
          <a className='reportlink' href='/reportpage'> Report</a>

    </center>
  );
}

export default Report;

