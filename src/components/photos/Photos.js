import React, { useEffect, useState } from "react";
import { addPhoto } from "../../redux/PhotoSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import "./photos.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Photos = () => {
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChangeImage = (event) => {
		console.log(event.target.files[0]);
		setImage(event.target.files[0]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("image", image);
		formData.append("description", description);

		axios
			.post(
				"https://elck-cdc-api.onrender.com/photos",
				// "http://localhost:4000/photos",

				formData
			)
			.then((res) => {
				console.log(res);
				dispatch(addPhoto(res.data));
				console.log(res.data);
			})
			.catch((err) => console.log(err.message));

		// navigate("/photospage");
	};

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div>
			<div className="createphoto">
				<form
					className="formPhoto"
					onSubmit={handleSubmit}
					encType="multipart/form-data"
				>
					<div className="photoformItem ">
						<label className="pictureup" htmlFor="photo">
							Photo:
						</label>
						<input
							type="file"
							filename="photo"
							// value={profilepic}
							onChange={onChangeImage}
						/>
					</div>

					<div className="photoformItem">
						<label htmlFor="pdf">Description:</label>
						<textarea
							type="text"
							name="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<button type="submit" className="photoBtn">
						Add
					</button>
				</form>
			</div>
			<div className="photosCont">
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-down">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-down">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-down">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-right">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-right">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-right">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
				<div className="animation" data-aos="fade-up">
					<img src="./images/satellite.jpeg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Photos;
