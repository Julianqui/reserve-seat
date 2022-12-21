import React, { useEffect, useState } from "react";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ofice from "../../assets/ofice.png";
import available from "../../assets/available.png";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import L from "leaflet";
import "./Map.css";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../errors";
import { setBook } from "../../store/slices/book/BookSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const bounds = [
	[0, 0],
	[1800, 2646],
];
const style = { height: "100vh", width: "100vw" };

export const Map = ({ handlerDate }) => {
	const dispatch = useDispatch();
	const { matriz, date } = useSelector((state) => state.book);
	const [name, setName] = useState("");
	const [area, setArea] = useState("");
	const [global, setGlobal] = useState([]);
	const [error, setError] = useState(false);
	const [newObj, setNewObj] = useState(false);

	const handlerBook = (e) => {
		e.preventDefault();

		if ([name, area].includes("")) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
			return;
		}

		let objBook = {
			id: 7,
			name,
			area,
			date: "1 january 2023",
			coor1: 821,
			coor2: 1747,
			floor: 2,
			full: false,
			sector: 13,
			site: " La Docta",
			address: "F05-118 - 5th floor Av. Colón 3440, Córdoba, Argentina",
		};

		dispatch(setBook(objBook));
		setNewObj(objBook);
		setGlobal([...matriz, objBook]);
	};

	useEffect(() => {
		let co = [...matriz, global];
		setGlobal(co);
	}, [handlerDate]);

	return (
		<div className="Map-container">
			<MapContainer
				crs={L.CRS.Simple}
				minZoom={-4}
				bounds={bounds}
				style={style}
			>
				<ImageOverlay bounds={bounds} url={ofice} />
				{global
					.filter(
						(u) =>
							(u.coor1 != newObj.coor1 && u.coor2 != newObj.coor2) ||
							(newObj.id >= 7 && u.id > 1)
					)
					.map((u) => {
						return (
							<Marker
								key={u.id}
								position={[Number(u.coor1), Number(u.coor2)]}
								className="location"
								icon={
									u.full == false
										? new Icon({
												iconUrl: markerIconPng,
												iconSize: [25, 41],
												iconAnchor: [12, 41],
										  })
										: new Icon({
												iconUrl: available,
												iconSize: [40, 41],
												iconAnchor: [12, 41],
												className: "available",
										  })
								}
							>
								<Popup>
									<strong>{u.name}</strong>
									<br />
									{u.full == false ? (
										<div className="">
											{u.area}
											<br />
											Floor: {u.floor}
											<br />
											Seat: {u.sector}
											<br />
											{u.id == 7 && (
												<Button variant="text" type="submit">
													Cancel
												</Button>
											)}
										</div>
									) : (
										<div>
											<h2>Make a reservation</h2>
											{error && <Error message="All field is requiered" />}
											<form onSubmit={handlerBook}>
												<TextField
													margin="normal"
													required
													type="text"
													placeholder="Your name"
													onChange={(e) => setName(e.target.value)}
												/>
												<TextField
													margin="normal"
													required
													type="text"
													placeholder="your area"
													onChange={(e) => setArea(e.target.value)}
												/>

												<Button variant="text" type="submit">
													Book
												</Button>
											</form>
										</div>
									)}
								</Popup>
							</Marker>
						);
					})}
			</MapContainer>
		</div>
	);
};

export default Map;
