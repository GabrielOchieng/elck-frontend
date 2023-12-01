import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./register.css";

const Register = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		username: "",
	});

	const { firstName, lastName, email, username, password } = inputValue;
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const handleError = (err) => {
		toast.error(err, {
			position: "bottom-left",
		});
	};

	const handleSuccess = (msg) => {
		toast.success(msg, {
			position: "bottom-right",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"https://elck-cdc-api.onrender.com/users/signup",
				{
					...inputValue,
				},
				{
					withCredentials: true,
				}
			);
			const { success, message } = data;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {
					navigate("/signin");
				}, 2000);
			} else {
				handleError(message);
			}
		} catch (error) {
			console.log(error);
		}

		setInputValue({
			...inputValue,
			email: "",
			password: "",
			username: "",
		});
	};
	return (
		<div>
			<div className="register">
				<h2>Sign up</h2>
				<div className="loginForm">
					<form onSubmit={handleSubmit}>
						<div className="registerItem">
							<label htmlFor="firstName">Firstname:</label>
							<input
								type="text"
								name="firstName"
								value={firstName}
								placeholder="FirstName"
								onChange={handleOnChange}
							/>
						</div>
						<div className="registerItem">
							<label htmlFor="lastName">Lastname:</label>
							<input
								type="text"
								name="lastName"
								value={lastName}
								placeholder="LastName"
								onChange={handleOnChange}
							/>
						</div>
						<div className="registerItem">
							<label htmlFor="email">Email address:</label>
							<input
								type="email"
								name="email"
								value={email}
								placeholder="Enter your email"
								onChange={handleOnChange}
							/>
						</div>
						<div className="registerItem">
							<label htmlFor="username">Preffered Username:</label>
							<input
								type="text"
								name="username"
								value={username}
								placeholder="Username"
								onChange={handleOnChange}
							/>
						</div>
						<div className="registerItem">
							<label htmlFor="passoword">Password:</label>
							<input
								type="password"
								name="password"
								value={password}
								placeholder="Enter your password"
								onChange={handleOnChange}
							/>
						</div>
						<div className="registerItem">
							<p>
								By signing up you agree to the
								<span>
									<Link to={"/signin"}> Terms and Conditions</Link>{" "}
								</span>
							</p>
						</div>
						<div className="buttons">
							<button type="submit">Sign up</button>

							<Link to={"/signin"}>
								<button>Registered?</button>
							</Link>
						</div>
					</form>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Register;
