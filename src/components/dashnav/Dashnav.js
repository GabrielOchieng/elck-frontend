import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./dashnav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";

const Dashnav = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([]);
	const [username, setUsername] = useState("");

	const [dashnav, setDashnav] = useState(false);
	const showDashnavbar = () => {
		setDashnav(!dashnav);
	};

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate("/signin");
			}
			const { data } = await axios.post(
				"https://elck-cdc-api.onrender.com/users",
				// .
				{},
				{ withCredentials: true }
			);
			const { status, user } = data;
			setUsername(user);

			return status
				? toast({ position: "top-right" })
				: (removeCookie("token"), navigate("/dashboard"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);

	const Logout = () => {
		removeCookie("token");
		navigate("/signin");
	};
	return (
		<div className="containerNavdash">
			<div className="titledash">
				<Link to={"/register"}>
					<BsFilePerson className="icondash" />
					<h5>ADMIN</h5>
				</Link>
			</div>
			<div className="segmentsdash">
				<ul className="seguldash">
					<li className="navsegdash">
						<Link to={"/participants"}>PARTICIPANTS</Link>
					</li>
					<li className="navsegdash">
						<Link to={"/"}>STAFF</Link>
					</li>
					<li className="navsegdash">
						<Link to={"/"}>UPCOMING ACTIVITIES</Link>
					</li>

					<li className="navsegdash">
						<Link to={"/"}>PHOTOS</Link>
					</li>
				</ul>
			</div>
			<div className="titledashl">
				<h4>
					Welcome <span>{username}</span>
				</h4>
				<button onClick={Logout}>Logout</button>
			</div>
			{/* <ToastContainer /> */}

			<div onClick={showDashnavbar} className="dashnav-btn">
				{!dashnav ? (
					<FaBars className="dashiconres" />
				) : (
					<div className="dashnav_open">
						<div>
							<FaTimes className="dashiconres" />
						</div>
						<div className="">
							<div className="segmentsdash">
								<ul className="segulrdash">
									<li className="navsegdash">
										<Link to={"/participants"}>PARTICIPANTS</Link>
									</li>
									<li className="navsegdash">
										<Link to={"/"}>STAFF</Link>
									</li>
									<li className="navsegdash">
										<Link to={"/"}>UPCOMING ACTIVITIES</Link>
									</li>

									<li className="navsegdash">
										<Link to={"/"}>PHOTOS</Link>
									</li>
								</ul>
							</div>
							<div className="titlerdash">
								<h4>
									Welcome <span>{username}</span>
								</h4>
								<button onClick={Logout}>Logout</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashnav;
