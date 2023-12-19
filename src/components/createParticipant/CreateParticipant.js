import React, { useState } from "react";
import { addParticipant } from "../../redux/ParticipantSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./createParticipant.css";

const CreateParticipant = () => {
	const [profilepic, setProfilepic] = useState("");
	const [participantno, setParticipantno] = useState("");
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [residence, setResidence] = useState("");
	const [caregiver, setCaregiver] = useState("");
	const [contact, setContact] = useState("");
	const [pdf, setPdf] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChangePic = (event) => {
		console.log(event.target.files[0]);
		setProfilepic(event.target.files[0]);
	};

	const handleSubmit = (event) => {
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
			.post(
				// "https://elck-cdc-api.onrender.com/participants",
				"http://localhost:4000/participants",

				formData
			)
			.then((res) => {
				console.log(res);
				dispatch(addParticipant(res.data));
				console.log(res.data);
			})
			.catch((err) => console.log(err.res));

		navigate("/createParticipant");
	};
	return (
		<div>
			<div className="createformCont">
				<h3 className="createformTitle">Create New Participant</h3>
				<form
					className="createForm"
					onSubmit={handleSubmit}
					encType="multipart/form-data"
				>
					<div className="createformItem">
						<label htmlFor="participantno">Participant No:</label>
						<input
							type="number"
							name="participantno"
							value={participantno}
							onChange={(e) => setParticipantno(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="age">Age:</label>
						<input
							type="number"
							name="age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="residence">Residence:</label>
						<input
							type="text"
							name="residence"
							value={residence}
							onChange={(e) => setResidence(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="caregiver">Caregiver:</label>
						<input
							type="text"
							name="caregiver"
							value={caregiver}
							onChange={(e) => setCaregiver(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="contact">Contact:</label>
						<input
							type="number"
							name="contact"
							value={contact}
							onChange={(e) => setContact(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="pdf">PDF:</label>
						<input
							type="number"
							name="pdf"
							value={pdf}
							onChange={(e) => setPdf(e.target.value)}
						/>
					</div>
					<div className="createformItem">
						<label htmlFor="profilepic">Profile Pic:</label>
						<input
							type="file"
							filename="profilepic"
							// value={profilepic}
							onChange={onChangePic}
						/>
					</div>
					<br />
					<button type="submit" className="createBtn">
						Create
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateParticipant;
