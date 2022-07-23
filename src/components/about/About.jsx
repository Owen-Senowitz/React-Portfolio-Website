import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, sit ratione. Commodi quisquam odio dignissimos consequuntur doloribus! At, soluta ullam! Voluptatibus impedit quaerat minus reiciendis. Esse sint officiis eligendi corporis.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About