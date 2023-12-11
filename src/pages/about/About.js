import React from "react";
import AboutHeader from "../../components/aboutheader/AboutHeader";
import AboutWords from "../../components/aboutwords/AboutWords";
import AboutPics from "../../components/aboutpics/AboutPics";
import AboutLast from "../../components/aboutlast/AboutLast";

const About = () => {
	return (
		<div>
			<AboutHeader />
			<AboutWords />
			<AboutPics />
			<AboutLast />
		</div>
	);
};

export default About;
