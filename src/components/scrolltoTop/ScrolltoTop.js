import React, { useEffect, useState } from "react";
import { BsCapslock } from "react-icons/bs";
import "./scrolltotop.css";

const ScrolltoTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{showTopBtn && <BsCapslock onClick={goToTop} className="upicon" />}
		</div>
	);
};

export default ScrolltoTop;
