import React from "react";
import Dashnav from "../../components/dashnav/Dashnav";
import Dashbody from "../../components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import ParticipantPage from "../participantsPage/ParticipantsPage";
import Create from "../create/Create";
import PhotosPage from "../photosPage/PhotosPage";
import EditParticipant from "../../pages/edit/EditParticipant";

const Dashboard = () => {
	return (
		<>
			<Dashnav />
			<Routes>
				<Route path="/participantspage" element={<ParticipantPage />} />
				<Route path="/createParticipant" element={<Create />} />
				<Route path="/editParticipant/:id" element={<EditParticipant />} />
				<Route path="/photospage" element={<PhotosPage />} />
			</Routes>
		</>
	);
};

export default Dashboard;
