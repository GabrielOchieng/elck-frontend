import { createSlice } from "@reduxjs/toolkit";

const participantSlice = createSlice({
	name: "participants",
	initialState: {
		participants: [],
	},
	reducers: {
		getParticipant: (state, action) => {
			state.participants = action.payload.data.map((participant) => {
				return {
					id: participant._id,
					profilepic: participant.profilepic,
					participantno: participant.participantno,
					username: participant.username,
					age: participant.age,
					residence: participant.residence,
					caregiver: participant.caregiver,
					contact: participant.contact,
					pdf: participant.pdf,
				};
			});
		},
		addParticipant: (state, action) => {
			state.participants.push(action.payload);
		},
		updateParticipant: (state, action) => {
			const index = state.participants.findIndex(
				(i) => i.id === action.payload.id
			);
			state.participants[index] = {
				id: action.payload.id,
				profilepic: action.payload.profilepic,
				participantno: action.payload.participantno,
				username: action.payload.username,
				age: action.payload.age,
				residence: action.payload.residence,
				caregiver: action.payload.caregiver,
				contact: action.payload.contact,
				pdf: action.payload.pdf,
			};
		},
		deleteParticipant: (state, action) => {
			const id = action.payload.id;
			state.participants = state.participants.filter((p) => p.id !== id);
		},
	},
});

export const {
	addParticipant,
	getParticipant,
	updateParticipant,
	deleteParticipant,
} = participantSlice.actions;
export default participantSlice.reducer;
