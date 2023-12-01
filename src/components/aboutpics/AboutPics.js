import React from "react";
import "./aboutpics.css";

const AboutPics = () => {
	return (
		<div className="aboutpics">
			<div className="aboutact1">
				<img src="./images/fun.jpeg" alt="" />
				<h2>WHO WE ARE</h2>
			</div>
			<div className="aboutact2">
				<img src="./images/satellite.jpeg" alt="" />
				<h2>OUR SATELLITE</h2>
			</div>
			<div className="aboutact3">
				<img src="./images/out.jpeg" alt="" />
				<h2>OUR STRUCTURE</h2>
			</div>
			<div className="aboutact4">
				<a href="https://www.compassion.com/" target="blank">
					<img
						src="https://memploi.com/wp-content/uploads/job-manager-uploads/company_logo/2022/10/Compassion-INT.jpg"
						alt=""
					/>
					<h2>OUR PARTNERS</h2>
				</a>
			</div>
		</div>
	);
};

export default AboutPics;
