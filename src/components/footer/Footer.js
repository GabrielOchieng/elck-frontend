import React from "react";
import { BsLinkedin, BsXLg, BsFacebook, BsGithub } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
	return (
		<div className="containfooter">
			<div className="footer">
				<div className="upperfooter">
					<div className="footerwords">
						<div className="footercomp footergive">
							<h4>Ways to Give</h4>
							<ul>
								<li>Sponsor a child</li>
								<li>Ways to donate</li>
								<li>Gift Catalog</li>
								<li>Other ways to give</li>
							</ul>
						</div>
						<div className="footercomp footeradvocate">
							<h4>Ways to Advocate</h4>
							<ul>
								<li>Compassion Sunday</li>
								<li>Volunteer</li>
								<li>Pray with us</li>
							</ul>
						</div>
						<div className="footercomp footerlinks">
							<h4>Quick Links</h4>
							<ul>
								<li>Dashboard</li>
								<li>My Account</li>
								<li>Stories</li>
								<li>Careers</li>
							</ul>
						</div>
						<div className="footercomp footercontact">
							<h4>Contact Us</h4>
							<ul>
								<li>+254792390805</li>
								<li>Monday through Saturday</li>
								<li>8.00 a.m to 5.00 p.m</li>
								<li>Chat with us</li>
							</ul>
						</div>
					</div>
					<div className="footerreach">
						<div className="footerform">
							<h2>Message</h2>
							<form>
								<input type="text" placeholder="Firstname" />
								<input type="text" id="lastname" placeholder="Lastname" />
								<input type="text" id="email" placeholder="Email" />
								<textarea
									name=""
									id=""
									cols="30"
									rows="5"
									placeholder="Message..."
								></textarea>
							</form>
							<button>Submit</button>
						</div>
						<div className="footersocials">
							<h2>Follow Us</h2>
							<ul>
								<li>
									<BsLinkedin />
								</li>
								<li>
									<BsXLg />
								</li>
								<li>
									<BsFacebook />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<div className="lowerfooter">
					<p>&copy; 2023 THEGABRIELSHOW. All rights reserved.</p>
					<ul>
						<li>
							<a
								href="https://www.linkedin.com/in/gabriel-ochieng"
								target="blank"
							>
								<BsLinkedin />
							</a>
						</li>
						<li>
							<BsXLg />
						</li>
						<li>
							<a href="https://github.com/GabrielOchieng" target="blank">
								<BsGithub />
							</a>
						</li>
						<li>
							<BsFacebook />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
