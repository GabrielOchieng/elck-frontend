import React, { useEffect, useState } from "react";
import { addPhoto, getPhoto, deletePhoto } from "../../redux/PhotoSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import "./photos.css";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import ScrolltoTop from "../scrolltoTop/ScrolltoTop";

const Photos = () => {
	const [modal, setModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");

	const photos = useSelector((state) => state.photos.photos);
	const dispatch = useDispatch();

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	const toggleDeleteModal = () => {
		setDeleteModal(!deleteModal);
	};

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
				// "https://elck-cdc-api.onrender.com/photos",
				"http://localhost:4000/photos",

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

	const handleDelete = (id) => {
		axios
			.delete(
				"https://elck-cdc-api.onrender.com/photos/" + id
				// "http://localhost:4000/photos/" + id
			)
			.then((res) => {
				dispatch(deletePhoto({ id }));
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const response = await axios.get(
					"https://elck-cdc-api.onrender.com/photos"
					// "http://localhost:4000/photos"
				);

				dispatch(getPhoto(response.data));
			} catch (err) {
				console.log(err);
			}
		};
		fetchPhotos();
	}, []);

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div>
			{!modal && (
				<div className="addphoto">
					<button className="photoadd" onClick={toggleModal}>
						Add Photo
					</button>
				</div>
			)}

			{modal && (
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

						<button type="submit" className="photoBtn" onClick={toggleModal}>
							Add
						</button>
					</form>
				</div>
			)}
			<div className="photosCont">
				<div className="animationcont" data-aos="fade-up">
					{photos.map((photo) => {
						return (
							<div key={photo.id} className="animation" data-aos="fade-down">
								<img
									src={`/photosdes/${photo.image}`}
									alt="Elck cdc activity image"
								/>

								<div className="btnp">
									<p>{photo.description}</p>

									{!deleteModal && (
										<button
											onClick={toggleDeleteModal}
											className="deletephotobtn"
										>
											Delete Photo
										</button>
									)}
									{deleteModal && (
										<div className="deleteModal">
											<p>Are you sure you want to delete this photo?!!!</p>
											<button
												className="yesdelete"
												onClick={() => handleDelete(photo.id)}
											>
												Yes !
											</button>
											<button className="nodelete" onClick={toggleDeleteModal}>
												No
											</button>
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="upscroll">
				<ScrolltoTop />
			</div>
		</div>
	);
};

export default Photos;
