import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
	name: "photos",
	initialState: {
		photos: [],
	},
	reducers: {
		getPhoto: (state, action) => {
			state.photos = action.payload.data.map((photo) => {
				return {
					id: photo._id,
					image: photo.image,
					description: photo.description,
				};
			});
		},
		addPhoto: (state, action) => {
			state.photos.push(action.payload);
		},
		updatePhoto: (state, action) => {
			const index = state.photos.findIndex((i) => i.id === action.payload.id);
			state.photos[index] = {
				id: action.payload.id,
				image: action.payload.image,
				description: action.payload.description,
			};
		},
		deletePhoto: (state, action) => {
			const id = action.payload.id;
			state.photos = state.photos.filter((p) => p.id !== id);
		},
	},
});

export const { addPhoto, getPhoto, updatePhoto, deletePhoto } =
	photoSlice.actions;
export default photoSlice.reducer;
