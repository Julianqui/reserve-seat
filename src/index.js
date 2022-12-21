import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Profile, Auth, Reservations } from "./pages";
import "./index.css";
import { store } from "./store/Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth />,
	},

	{
		path: "/home",
		element: <Home />,
	},

	{
		path: "/profile",
		element: <Profile />,
	},

	{
		path: "/reservations",
		element: <Reservations />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
