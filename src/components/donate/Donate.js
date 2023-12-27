import React from "react";
import "./donate.css";

const Donate = () => {
	return (
		<div>
			<div className="maindiv">
				<img
					src="./images/donate.jpeg"
					alt="elck cdc participants"
					className="donateimg"
				/>
				<div className="donatecont">
					<h4>
						YOUR DONATION WILL ENSURE <br /> A CHILD IS HOLISTICALLY DEVELOPED
					</h4>
					<h6>
						DONATE ANY AMOUNT TO <br /> PAYBILL NUMBER{" "}
						<span className="figures">4062365</span> AND <br /> ACCOUNT NUMBER
						BEING YOUR NAME
					</h6>
					<p>Every coin you donate counts.</p>
				</div>
				<div className="othercont">
					<h3>
						DONATE NOW <br /> <span className="donatespn">TO SAVE LIVES</span>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Donate;
