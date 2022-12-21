import { createSlice } from "@reduxjs/toolkit";

const nombre =
	localStorage.getItem("nombre") != null
		? JSON.parse(localStorage.getItem("nombre"))
		: "";
const nacionalidad =
	localStorage.getItem("nacionalidad") != null
		? JSON.parse(localStorage.getItem("nacionalidad"))
		: "";
const email =
	localStorage.getItem("email") != null
		? JSON.parse(localStorage.getItem("email"))
		: "";
const site =
	localStorage.getItem("site") != null
		? JSON.parse(localStorage.getItem("site"))
		: "";

export const initialState = {
	globerName: nombre,
	globerNationality: nacionalidad,
	globerEmail: email,
	globerSite: site,
	charge: false,
};

export const globerSlice = createSlice({
	name: "globerTeam",
	initialState,
	reducers: {
		setGlober: (state, action) => {
			const { name, email, nationality, site } = action.payload;
			state.globerName = name;
			state.globerEmail = email;
			state.globerNationality = nationality;
			state.globerSite = site;
			state.charge = true;

			localStorage.setItem("nombre", JSON.stringify(state.globerName));
			localStorage.setItem(
				"nacionalidad",
				JSON.stringify(state.globerNationality)
			);
			localStorage.setItem("email", JSON.stringify(state.globerEmail));
			localStorage.setItem("site", JSON.stringify(state.globerSite));
			localStorage.setItem("charge", JSON.stringify(state.charge));
		},
	},
});

// Action creators are generated for each case reducer function
export const { setGlober } = globerSlice.actions;

export default globerSlice.reducer;
