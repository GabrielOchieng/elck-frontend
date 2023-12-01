import React from "react";

import Participants from "../../components/participants/Participants";
import Dashnav from "../../components/dashnav/Dashnav";

const ParticipantPage = () => {
	return (
		<div className="dashboard">
			<Dashnav />
			<Participants />
		</div>
	);
};

export default ParticipantPage;
