import React, { useEffect } from "react";
import "./activities.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Activities = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	});

	return (
		<div className="activities">
			<div className="activitieshead">
				<a href="/">How We Work</a>
				<a href="/">Partners</a>
				<a href="/">Our Impact</a>
			</div>
			<div className="activitiesdesc" data-aos="fade-up">
				<img src="/images/Outdoor.jpeg" alt="elck cdc participants" />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					repudiandae quisquam quis nisi laudantium, alias rem fugiat voluptate
					repellendus deserunt quasi delectus, ratione consequatur ut
					consectetur architecto voluptatum tempora, libero molestiae explicabo
					illo harum nemo est! Omnis nihil hic commodi libero alias facilis
					accusantium inventore ea! Aperiam ad aut repellat.
				</p>
			</div>
		</div>
	);
};

export default Activities;
