import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Owen Senowitz
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Skills</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a
					href="https://www.linkedin.com/in/owen-senowitz-614a94169/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/Owen-Senowitz"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
			</div>
			<div className="footer__copyright">
				<small>
					© {`ET ${new Date().getFullYear()}. All rights reserved.`}
				</small>
			</div>
		</footer>
	);
};

export default Footer;
