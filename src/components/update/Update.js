import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	addParticipant,
	updateParticipant,
} from "../../redux/ParticipantSlice";
import "./update.css";

const Update = () => {
	const { id } = useParams();
	const participants = useSelector((state) => state.participants.participants);
	const participant = participants.find((p) => p.id === id);

	const [profilepic, setProfilepic] = useState("");
	const [participantno, setParticipantno] = useState(participant.participantno);
	const [username, setUsername] = useState(participant.username);
	const [age, setAge] = useState(participant.age);
	const [residence, setResidence] = useState(participant.residence);
	const [caregiver, setCaregiver] = useState(participant.caregiver);
	const [contact, setContact] = useState(participant.contact);
	const [pdf, setPdf] = useState(participant.pdf);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChangePic = (event) => {
		console.log(event.target.files[0]);
		setProfilepic(event.target.files[0]);
	};

	const handleUpdate = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("profilepic", profilepic);
		formData.append("participantno", participantno);
		formData.append("username", username);
		formData.append("age", age);
		formData.append("residence", residence);
		formData.append("caregiver", caregiver);
		formData.append("contact", contact);
		formData.append("pdf", pdf);

		axios
			.put(
				"https://elck-cdc-website-api.vercel.app/participants/" + id,
				formData
			)
			.then((res) => {
				dispatch(
					updateParticipant({
						formData,
					})
				);
				console.log(res.data);
			})
			.catch((err) => console.log(err));

		navigate("/participants");
	};

	return (
		<div>
			<div className="updateformCont">
				<h3 className="updateformTitle">Update Participant</h3>
				<form
					className="updteForm"
					onSubmit={handleUpdate}
					encType="multipart/form-data"
				>
					<div className="updateformItem">
						<label htmlFor="participantno">Participant No:</label>
						<input
							type="number"
							name="participantno"
							value={participantno}
							onChange={(e) => setParticipantno(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="username">Name:</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="age">Age:</label>
						<input
							type="number"
							name="age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="residence">Residence:</label>
						<input
							type="text"
							name="residence"
							value={residence}
							onChange={(e) => setResidence(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="caregiver">Caregiver:</label>
						<input
							type="text"
							name="caregiver"
							value={caregiver}
							onChange={(e) => setCaregiver(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="contact">Contact:</label>
						<input
							type="number"
							name="contact"
							value={contact}
							onChange={(e) => setContact(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="pdf">Caregiver:</label>
						<input
							type="number"
							name="pdf"
							value={pdf}
							onChange={(e) => setPdf(e.target.value)}
						/>
					</div>
					<div className="updateformItem">
						<label htmlFor="profilepic">Profile Pic:</label>
						<input
							type="file"
							filename="profilepic"
							// value={profilepic}
							onChange={onChangePic}
						/>
					</div>
					<br />
					<button className="updateBtn" type="submit">
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default Update;
