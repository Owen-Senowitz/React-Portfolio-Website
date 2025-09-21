import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	const startYear = 2021;
	const currentYear = new Date().getFullYear();
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img src={ME} alt="Owen Senowitz" />
					</div>
				</div>
				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<FaAward className="about_icon" />
							<h5>Experience</h5>
							<small>{currentYear - startYear}+ Years</small>
						</article>
						<article className="about_card">
							<VscFolderLibrary className="about_icon" />
							<h5>Projects</h5>
							<small>20+ Completed</small>
						</article>
					</div>
					<p>
						I’m a Software Engineer with a focus on designing and
						building <b>scalable</b> backend APIs that support{" "}
						<b>high-traffic</b> systems. I work with <b>Java</b> and{" "}
						<b>C#</b> as my primary languages, and I have experience
						with event-driven platforms such as <b>Kafka</b> and
						databases including <b>MongoDB</b>, <b>PostgreSQL</b>,
						and <b>MySQL</b>. I enjoy solving complex problems,
						optimizing performance, and ensuring the systems I build
						can scale as demand grows. Alongside my work, I am
						pursuing a <b>Master’s degree in Computer Science</b> at
						East Carolina University. My graduate studies allow me
						to deepen my knowledge in areas like{" "}
						<b>machine learning</b>, <b>algorithms</b>, and{" "}
						<b>artificial intelligence</b>, which I bring back into
						my engineering practice.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
