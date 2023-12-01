import { configureStore } from "@reduxjs/toolkit";
import participantReducer from "./ParticipantSlice";

const store = configureStore({
	reducer: {
		participants: participantReducer,
	},
});

export default store;
