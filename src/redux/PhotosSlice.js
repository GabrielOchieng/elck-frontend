import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
	name: "photos",
	initialState: {
		photos: [],
	},
	reducers: {
		getPhoto: (state, action) => {
			state.photos = action.payload.data.map((photo) => {
				return {
					id: photo._id,
					photo: photo.photo,
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
				photo: action.payload.photo,
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
	photosSlice.actions;
export default photosSlice.reducer;
