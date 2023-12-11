import { configureStore } from "@reduxjs/toolkit";
import participantReducer from "./ParticipantSlice";
import photoReducer from "./PhotosSlice";

const store = configureStore({
	reducer: {
		participants: participantReducer,
		photos: photoReducer,
	},
});

export default store;
