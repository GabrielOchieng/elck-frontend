import React from "react";
import Dashnav from "../../components/dashnav/Dashnav";
import Dashbody from "../../components/dashbody/Dashbody";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Dashnav />
			<Dashbody />
		</div>
	);
};

export default Dashboard;
