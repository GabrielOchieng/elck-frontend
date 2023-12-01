import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Activities from "../../components/activities/Activities";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
	return (
		<div>
			<Header />
			<hr />
			<Body />
			<Activities />
			<hr />
			<Testimonials />
		</div>
	);
};

export default Home;
