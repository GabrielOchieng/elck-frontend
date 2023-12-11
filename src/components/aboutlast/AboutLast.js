import React, { useEffect } from "react";
import "./aboutlast.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutLast = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div
			style={{
				backgroundImage: "url(./images/back.jpeg)",
				backgroundRepeat: "norepeat",
				backgroundSize: "cover",
				width: "100%",
			}}
			className="aboutlast"
			data-aos="fade-up"
		>
			<h1>A CLOSER LOOK AT THE WORK WITH OUR CHILDREN</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro neque,
				hic adipisci cumque accusantium possimus? Aut tenetur obcaecati natus
				maxime! Quis omnis eos amet repellendus corporis aspernatur rerum ab
				quisquam ipsum ut et debitis unde, veniam dolores tempora error ipsa
				impedit ipsam atque? Consequuntur esse minus recusandae nesciunt non.
				Quibusdam porro nemo explicabo modi cupiditate doloribus? Dolor earum
				accusantium ipsa expedita voluptatum molestiae eos at porro alias ullam
				exercitationem, cupiditate repellat quas facere quae. Sed voluptatem
				veniam temporibus natus dolorem nemo aspernatur eos, laudantium at
				recusandae! Culpa officia quasi illum ducimus modi reiciendis impedit
				sequi tempora cumque laudantium. Delectus, tenetur!
			</p>
		</div>
	);
};

export default AboutLast;
