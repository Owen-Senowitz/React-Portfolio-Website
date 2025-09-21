import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
	const email = "owen.senowitz@gmail.com";
	const linkedinUrl = "https://www.linkedin.com/in/owen-senowitz/";

	return (
		<section id="contact" className="contact__section">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>{email}</h5>
						<a href={`mailto:${email}`}>Send a message</a>
					</article>
					<article className="contact__option">
						<FaLinkedin className="contact__option-icon" />
						<h4>LinkedIn</h4>
						<h5>owen-senowitz</h5>
						<a
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Connect on LinkedIn
						</a>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Contact;
