import React, { useEffect } from "react";
import "./aboutpics.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPics = () => {
	useEffect(() => {
		AOS.init({ duration: 3000 });
	}, []);

	return (
		<div className="aboutpics">
			<div className="aboutact1" data-aos="fade-right">
				<img src="./images/fun.jpeg" loading="lazy" alt="" />
				<h2>WHO WE ARE</h2>
			</div>
			<div className="aboutact2" data-aos="fade-left">
				<img src="./images/satellite.jpeg" loading="lazy" alt="" />
				<h2>OUR SATELLITE</h2>
			</div>
			<div className="aboutact3" data-aos="fade-right">
				<img src="./images/out.jpeg" loading="lazy" alt="" />
				<h2>OUR STRUCTURE</h2>
			</div>
			<div className="aboutact4" data-aos="fade-left">
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
