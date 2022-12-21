import { createSlice } from "@reduxjs/toolkit";

const matriz =
	localStorage.getItem("matriz") != null
		? JSON.parse(localStorage.getItem("matriz"))
		: "";

const date =
	localStorage.getItem("date") != null
		? JSON.parse(localStorage.getItem("date"))
		: "";

const valid =
	localStorage.getItem("valid") != null
		? JSON.parse(localStorage.getItem("valid"))
		: "";
const full =
	localStorage.getItem("full") != null
		? JSON.parse(localStorage.getItem("full"))
		: "";
const name =
	localStorage.getItem("name") != null
		? JSON.parse(localStorage.getItem("name"))
		: "";
const matriz2 =
	localStorage.getItem("matriz2") != null
		? JSON.parse(localStorage.getItem("matriz2"))
		: "";

export const initialState = {
	nameBook: "",
	areaBook: "",
	floorBook: "",
	sectorBook: "",
	fullBook: "",
	date: date,
	matriz: matriz,
	matriz2: matriz,
	valid: valid,
	full: full,
};

export const bookSlice = createSlice({
	name: "book",
	initialState,
	reducers: {
		setDate: (state, action) => {
			const { date, matriz, valid, full } = action.payload;

			state.date = date;
			state.matriz = matriz[0];
			state.valid = valid;
			state.full = full;

			localStorage.setItem("matriz", JSON.stringify(state.matriz));
			localStorage.setItem("date", JSON.stringify(state.date));
			localStorage.setItem("valid", JSON.stringify(state.valid));
			localStorage.setItem("full", "true", JSON.stringify(state.full));
		},
		setBook: (state, action) => {
			console.log("antes de state.matriz");
			// state.newObj = [...action.payload];
			state.matriz = [...state.matriz, action.payload];
			state.matriz = state.matriz.filter((u) => u.id > 1);
			console.log(state.matriz);
			localStorage.setItem("matriz", JSON.stringify(state.matriz));
		},
		setDelete: (state, action) => {
			state.matriz = [...state.matriz, action.payload];
			// state.matriz = state.matriz.filter((u) => u.id < 7 )

			console.log(state.matriz);
			// localStorage.setItem("matriz", JSON.stringify(state.matriz));
		},
	},
});

// Action creators are generated for each case reducer function
export const { setDate, setBook, setDelete } = bookSlice.actions;

export default bookSlice.reducer;
