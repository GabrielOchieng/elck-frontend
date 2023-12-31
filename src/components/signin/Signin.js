import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import FadeLoader from "react-spinners/FadeLoader";
import "./signin.css";

const Signin = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const { email, password } = inputValue;

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
			position: "bottom-left",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const { data } = await axios.post(
				"https://elck-cdc-api.onrender.com/users/login",
				{
					...inputValue,
				},
				{ withCredentials: true }
			);

			console.log(data);

			const { success, message } = data;
			if (success) {
				handleSuccess(message);

				navigate("/dashboard");
				setLoading(false);
			} else {
				setLoading(false);
				handleError(message);
			}
		} catch (error) {
			console.log(error);
		}
		setInputValue({
			...inputValue,
			email: "",
			password: "",
		});
	};

	return (
		<div>
			{loading ? (
				<div className="loader">
					<FadeLoader
						loading={loading}
						size={150}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			) : (
				<div className="login">
					<h2>Sign in</h2>
					<div className="loginForm">
						<form onSubmit={handleSubmit}>
							<div className="loginItem">
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									name="email"
									value={email}
									placeholder="Enter your email address"
									onChange={handleOnChange}
								/>
							</div>
							<div className="loginItem">
								<label htmlFor="password">Password:</label>
								<input
									type="password"
									name="password"
									value={password}
									placeholder="Enter your password"
									onChange={handleOnChange}
								/>
							</div>
							<div className="loginItem">
								<Link to={"/register"}>Forgot your username/password?</Link>
							</div>
							<div className="buttons">
								<button type="submit">Login</button>
								<Link to={"/register"}>
									<button>New User?</button>
								</Link>
							</div>
						</form>
						<ToastContainer />
					</div>
				</div>
			)}
		</div>
	);
};

export default Signin;
