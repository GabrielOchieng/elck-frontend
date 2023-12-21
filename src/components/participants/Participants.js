import axios from "axios";
import "./participants.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteParticipant,
	getParticipant,
} from "../../redux/ParticipantSlice";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Participants = () => {
	const [search, setSearch] = useState("");

	const dispatch = useDispatch();
	const participants = useSelector((state) => state.participants.participants);

	const handleDelete = (id) => {
		axios
			.delete(
				// "http://localhost:4000/participants/" + id)
				"https://elck-cdc-api.onrender.com/participants/" + id
			)
			.then((res) => {
				dispatch(deleteParticipant({ id }));
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		const fetchParticipants = async () => {
			try {
				const response = await axios.get(
					// "http://localhost:4000/participants"
					"https://elck-cdc-api.onrender.com/participants"
				);

				dispatch(getParticipant(response.data));
			} catch (err) {
				console.log(err);
			}
		};
		fetchParticipants();
	}, []);

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div className="mainP">
			<div className="search">
				<BsSearch className="searchicon" />
				<input
					type="text"
					onChange={(e) => setSearch(e.target.value)}
					className="searchbar"
					placeholder="Search Participants"
				/>
			</div>
			<div className="titleP">
				<h2>PARTICIPANTS</h2>
			</div>

			<div className="items">
				<div className="participantscont" data-aos="fade-down">
					{participants
						.filter((item) => {
							return search.toLowerCase() === ""
								? item
								: item.username.toLowerCase().includes(search);
						})
						.map((participant) => {
							return (
								<div key={participant.id} className="participants">
									<div className="item">
										<div className="subItem profile">
											<img
												src={`/uploads/${participant.profilepic}`}
												alt="Profile"
											/>

											<p>
												<span className="identifier">Name:</span>{" "}
												{participant.username}
											</p>
											<p>
												<span className="identifier">KENo:</span>{" "}
												{participant.participantno}
											</p>
										</div>
										<div className="details subItem">
											{" "}
											<p>
												<span>Age:</span> {participant.age} years
											</p>
											<p>
												<span>Caregiver:</span> {participant.caregiver}
											</p>
											<p>
												<span>Residence:</span> {participant.residence}
											</p>
											<p>
												{" "}
												<span>Contact:</span> {participant.contact}
											</p>
											<p>
												<span>PDF:</span> {participant.pdf}
											</p>
										</div>
										<div className="subItem btns">
											{" "}
											<Link to={`/editParticipant/${participant.id}`}>
												Edit Participant
											</Link>
											<button
												onClick={() => handleDelete(participant.id)}
												className="deletebtn"
											>
												Delete Participant
											</button>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="new">
				<Link to="/createParticipant">Create New Participant</Link>
			</div>
		</div>
	);
};

export default Participants;
