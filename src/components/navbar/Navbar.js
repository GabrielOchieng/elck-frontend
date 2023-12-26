import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const showNavbar = () => {
		setNav(!nav);
	};

	return (
		<div className="containerNav">
			<div className="title">
				<h1>KE0387 ELCK CDC</h1>
			</div>
			<nav className="segments">
				<div>
					<ul className="segul">
						<li className="navseg">
							<Link to="/">Home</Link>
						</li>
						<li className="navseg">
							<Link to="/about">About Us</Link>
						</li>
						<li className="navseg">
							<Link
								to="https://rarieda-satellite-cdc-gabrielochieng.vercel.app/"
								target="blank"
							>
								Our Satellite
							</Link>
						</li>

						<li className="navseg">
							<Link to="/donate">Donate</Link>
						</li>
						<li className="navseg">
							<Link to="/signin">Dashboard</Link>
						</li>
					</ul>
					<div onClick={showNavbar} className="nav-btn">
						{!nav ? (
							<FaBars className="iconres" />
						) : (
							<div className="nav_open">
								<div>
									<FaTimes className="iconres" />
								</div>
								<div className="">
									<ul className="segulr">
										<li className="navseg">
											<Link to="/" onClick={showNavbar}>
												Home
											</Link>
										</li>
										<li className="navseg">
											<Link to="/about">About Us</Link>
										</li>
										<li className="navseg">
											<Link
												to="https://rarieda-satellite-cdc-gabrielochieng.vercel.app/"
												target="blank"
											>
												Satellite
											</Link>
										</li>

										<li className="navseg">
											<Link to="/donate">Donate</Link>
										</li>
										<li className="navseg">
											<Link to="/signin">Dashboard</Link>
										</li>
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
