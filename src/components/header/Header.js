import React from "react";
import "./header.css";

const Header = () => {
	return (
		<div className="containerHed">
			<div className="headerimg">
				<img src="/images/Headerimg.jpeg" alt="" />
			</div>
			<div className="headertext">
				<p>
					ELCK CDC is a Child Development Center that seeks to Release Children
					from Poverty through the implementation of four holistic domains in
					partnership with Compassion International.
				</p>
			</div>
		</div>
	);
};

export default Header;
