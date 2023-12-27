import React, { useEffect } from "react";
import "./testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
	useEffect(() => {
		AOS.init({ duration: 3000 });
	}, []);

	return (
		<div className="containtest">
			<div className="testtitle">
				<h1>TESTIMONIALS</h1>
			</div>
			<div className="testitems">
				<div className="testitem" data-aos="fade-right">
					<img src="./images/George.jpeg" alt="elck cdc staff" />
					<div className="testtext">
						<p>
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
							incidunt mollitia obcaecati maxime vero assumenda aspernatur
							dolores, quo impedit molestias?"
						</p>
						<h4>
							Mr. Oduru George <br /> Accountant
						</h4>
					</div>
				</div>
				<div className="testitem" data-aos="fade-left">
					<img src="./images/Eve.jpeg" alt="elck cdc staff" />
					<div className="testtext">
						<p>
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
							incidunt mollitia obcaecati maxime vero assumenda aspernatur
							dolores, quo impedit molestias?"
						</p>
						<h4>
							Madam Everlyne Juma <br /> Social Worker
						</h4>
					</div>
				</div>
				<div className="testitem" data-aos="fade-right">
					<img src="./images/Gabriel.jpeg" alt="elck cdc staff" />
					<div className="testtext">
						<p>
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
							incidunt mollitia obcaecati maxime vero assumenda aspernatur
							dolores, quo impedit molestias?"
						</p>
						<h4>
							Gabriel Ochieng <br /> Volunteer Social Worker
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
