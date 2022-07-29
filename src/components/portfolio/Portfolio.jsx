import React from 'react';
import Console from '../../assets/console.gif';
import WeatherApp from '../../assets/weatherapp.jpg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Springboot Student API',
      img: Console,
      technologies: 'Java Springboot, Swagger, Prometheus, Grafana',
      description: 'REST API demonstarting my knowledge of Enterprise Springboot API solutions learned over my 2022 summer Internship',
      link: '',
      github: 'https://github.com/Owen-Senowitz/Springboot-Student-API',
    },
    {
      id: 2,
      title: 'Crusie Price Checker',
      img: Console,
      technologies: 'Python, Twilio',
      description: 'Web scrapper that texts the customer when the price is changed',
      link: '',
      github: 'https://github.com/Owen-Senowitz/Crusie-Price-Checker',
    },
    {
      id: 3,
      title: 'Weather App',
      img: WeatherApp,
      technologies: 'JavaScript, OpenWeather APIs, Google Autocomplete',
      description: 'Displays the weather information for the location type into the search box',
      link: '',
      github: 'https://github.com/Owen-Senowitz/Weather-App',
    },
    {
      id: 4,
      title: 'Card Deck',
      img: Console,
      technologies: 'Java',
      description: 'Card deck that shuffles and deals cards',
      link: '',
      github: 'https://github.com/Owen-Senowitz/Card-Deck',
    },
    {
      id: 5,
      title: 'Chat Application',
      img: Console,
      technologies: 'Python Sockets',
      description: 'Chat application written in python using sockets',
      link: '',
      github: 'https://github.com/Owen-Senowitz/Chat-Application',
    },

    {
      id: 6,
      title: 'Book Catalog',
      img: Console,
      technologies: 'Java',
      description: 'Java Program that reads the book information from catalog.txt and acts as a book catalog interface',
      link: '',
      github: 'https://github.com/Owen-Senowitz/Book-Catalog',
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p><b>{pro.technologies}</b></p>
              <p>{pro.description}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/*
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
              */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio