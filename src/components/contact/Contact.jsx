import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_kuat8xs",
				"template_25c35zd",
				formRef.current,
				"user_fTmdSUwNIvHHeVKciQqUy"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Email sent successfully!");
				},
				(error) => {
					console.log(error.text);
					alert(
						"There was an error sending the email. Please try again later."
					);
				}
			);

		e.target.reset();
	};

	return (
		<section id="contact" className="contact__section">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>osenowitz.work@gmail.com</h5>
						<a href="mailto:osenowitz.work@gmail.com">Send a message</a>
					</article>
				</div>
				<form ref={formRef} onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Your Full Name"
						name="user_name"
						required
					/>
					<input
						type="text"
						placeholder="Your Email"
						name="user_email"
						required
					/>
					<textarea
						placeholder="Your message"
						rows="7"
						name="message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
