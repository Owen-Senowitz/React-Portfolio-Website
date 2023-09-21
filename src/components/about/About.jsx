import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
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
							<small>1+ Years</small>
						</article>
						<article className="about_card">
							<VscFolderLibrary className="about_icon" />
							<h5>Projects</h5>
							<small>20+ Completed</small>
						</article>
					</div>
					<p>
						I've spent the past 2022 summer working as a{" "}
						<b>Software Engineer Intern</b> for <b>Lowes</b> on the pricing
						team. I learned a ton of new information about Java, Springboot,
						Kafka, PostgreSQL, and Couchbase. During the school year at East
						Carolina University I'm a full time <b>Computer Science</b> student
						and a part time <b>Assistant Software Engineer</b> for the College
						of Nursing.
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
