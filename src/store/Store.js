import { configureStore } from "@reduxjs/toolkit";
import globerTeamReducer from "./slices/glober/GloberSlice";
import bookReducer from "./slices/book/BookSlice";
import authReducer from "./slices/auth/AuthSlice";

export const store = configureStore({
	reducer: {
		globerTeam: globerTeamReducer,
		book: bookReducer,
		auth: authReducer,
	},
});
