import React from "react";
import Resume from "../../assets/resume-2024.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a href={Resume} className="btn">
				Resume
			</a>
			<a href="#contact" className="btn btn-primary">
				Let's Talk
			</a>
		</div>
	);
};

export default CTA;
