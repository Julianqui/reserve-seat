import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Header from "../../components/header/Header";
import DropdownSelect from "../../components/dropdownSelect/DropdownSelect";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import "./Home.css";
import { Error, Map } from "../../components";
import { useState } from "react";
import { Place } from "../../mocks";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../store/slices/book/BookSlice";

export const Home = () => {
	const dispatch = useDispatch();
	const { nameAuth } = useSelector((state) => state.auth);
	const [site, setSite] = useState("");
	const [floor, setFloor] = useState("");
	const [available, setAvailable] = useState("");
	const [plane, setPlane] = useState(false);
	const [error, setError] = useState(false);
	const [msj, setMsj] = useState(false);

	const siteData = [
		{ value: 1, label: "Tandil" },
		{ value: 2, label: "La Plata" },
		{ value: 3, label: "Buenos Aires" },
	];
	const floorData = [
		{ value: 1, label: "Floor 12" },
		{ value: 2, label: "Floor 13" },
	];

	const siteHadler = (selectedSite) => {
		setSite(selectedSite);
	};

	const floorHandler = (selectedFloor) => {
		setFloor(selectedFloor);
	};

	const handlerDate = () => {
		let selectUser = Place.filter((u) => available.includes(u.date));
		if ([available].includes("")) {
			setMsj("The Date is Empty");
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);

			return;
		}
		if (available != selectUser.map((u) => u.date)) {
			setMsj("The date is wrong");
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
			return;
		}

		const objDate = {
			date: selectUser.map((u) => u.date),
			matriz: selectUser.map((u) => u.position),
			valid: true,
		};

		dispatch(setDate(objDate));

		setPlane(true);

		setAvailable("");
	};

	return (
		<div className="home">
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
			>
				<Header />
				<Divider />
				<Accordion defaultExpanded={true}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Filters</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Divider />

						<div className="home__half_filter">
							<DropdownSelect
								defaultValue={site}
								title={"Site"}
								minWidth={240}
								data={siteData}
								getSelectedValue={siteHadler}
							/>
							<DropdownSelect
								defaultValue={floor}
								title={"Floor"}
								minWidth={80}
								data={floorData}
								getSelectedValue={floorHandler}
							/>
						</div>
						<div className="home__half_filter">
							<FormControl sx={{ m: 1, minWidth: 140 }} size="small">
								<TextField
									label="Day"
									type="date"
									onChange={(e) => setAvailable(e.target.value)}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</FormControl>
							<Button variant="text" onClick={handlerDate}>
								Search
							</Button>
						</div>
					</AccordionDetails>
				</Accordion>
				<div className="home__error">{error && <Error message={msj} />}</div>
			</AppBar>
			<br />
			<br />
			<br />
			<br />

			{plane ? (
				<Map />
			) : (
				<h2 className="home__msj">
					Hello {nameAuth}, please select a date to continue
				</h2>
			)}
		</div>
	);
};

export default Home;
