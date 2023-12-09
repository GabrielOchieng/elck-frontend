import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import SigninPage from "./pages/signinpage/SigninPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ParticipantsPage from "./pages/participantsPage/ParticipantsPage";
import Create from "./pages/create/Create";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getParticipant } from "./redux/ParticipantSlice";
import EditParticipant from "./pages/edit/EditParticipant";
import DonatePage from "./pages/donate/DonatePage";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/donate" element={<DonatePage />} />
				<Route path="/signin" element={<SigninPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/participants" element={<ParticipantsPage />} />
				<Route path="/createParticipant" element={<Create />} />
				<Route path="/editParticipant/:id" element={<EditParticipant />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
