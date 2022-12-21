import { createSlice } from "@reduxjs/toolkit";

const nameAuth =
	localStorage.getItem("nameAuth") != null
		? JSON.parse(localStorage.getItem("nameAuth"))
		: "";
const nationalityAuth =
	localStorage.getItem("nationalityAuth") != null
		? JSON.parse(localStorage.getItem("nationalityAuth"))
		: "";
const emailAuth =
	localStorage.getItem("emailAuth") != null
		? JSON.parse(localStorage.getItem("emailAuth"))
		: "";
const siteAuth =
	localStorage.getItem("siteAuth") != null
		? JSON.parse(localStorage.getItem("siteAuth"))
		: "";

export const initialState = {
	nameAuth: nameAuth,
	nationalityAuth: nationalityAuth,
	emailAuth: emailAuth,
	siteAuth: siteAuth,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setMember: (state, action) => {
			const { name, nationality, mail, site } = action.payload;
			state.nameAuth = name;
			state.nationalityAuth = nationality;
			state.emailAuth = mail;
			state.siteAuth = site;

			localStorage.setItem("nameAuth", JSON.stringify(state.nameAuth));
			localStorage.setItem(
				"nationalityAuth",
				JSON.stringify(state.nationalityAuth)
			);
			localStorage.setItem("emailAuth", JSON.stringify(state.emailAuth));
			localStorage.setItem("siteAuth", JSON.stringify(state.siteAuth));
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMember } = authSlice.actions;

export default authSlice.reducer;
