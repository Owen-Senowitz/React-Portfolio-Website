import React from 'react';
import Console from '../../assets/console.gif';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Title',
      img: Console,
      link: '',
      github: 'https://github.com/Owen-Senowitz',
    },
    {
      id: 2,
      title: 'Title',
      img: Console,
      link: '',
      github: 'https://github.com/Owen-Senowitz',
    },
    {
      id: 3,
      title: 'Title',
      img: Console,
      link: '',
      github: 'https://github.com/Owen-Senowitz',
    },
    {
      id: 4,
      title: 'Title',
      img: Console,
      link: '',
      github: 'https://github.com/Owen-Senowitz',
    },
    {
      id: 5,
      title: 'Title',
      img: Console,
      link: '',
      github: 'https://github.com/Owen-Senowitz',
    },
    {
      id: 6,
      title: 'Title',
      img: Console,
      link: '',
      github: 'https://github.com/Owen-Senowitz',
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
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn btn-primary">GitHub</a>
            {/*<a href={pro.link} className="btn btn-primary">Live Demo</a>*/}
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio