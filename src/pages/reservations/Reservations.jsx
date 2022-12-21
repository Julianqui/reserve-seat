import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/header/Header";
import { Title } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PlaceIcon from "@mui/icons-material/Place";

const cards = [1, 2, 3, 4];

const theme = createTheme({
	palette: {
		background: {
			default: "#ECEFF1",
		},
	},
});

export const Reservations = () => {
	const { matriz } = useSelector((state) => state.book);
	let navigate = useNavigate();

	let copy = [...matriz];

	const site = copy.filter((u) => u.id == 7).map((e) => e.site);
	const address = copy.filter((u) => u.id == 7).map((e) => e.address);
	const date = copy.filter((u) => u.id == 7).map((e) => e.date);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Typography
				variant="h6"
				color="inherit"
				noWrap
				sx={{ flexGrow: 1 }}
				textAlign="center"
			>
				<Title title="Manage your bookings" textAlign="center" />
			</Typography>
			<main>
				<Container sx={{ py: 8 }} maxWidth="md">
					<Grid container spacing={4}>
						{site == "" ? (
							<div className="reservation__text">
								<h2>No have reservation</h2>
							</div>
						) : (
							<>
								{" "}
								{cards.map((card) => (
									<Grid
										item
										key={card}
										xs={12}
										sm={6}
										md={4}
										textAlign="center"
									>
										<Card
											sx={{
												height: "100%",
												display: "flex",
												flexDirection: "column",
											}}
										>
											<CardContent sx={{ flexGrow: 1 }}>
												<Typography gutterBottom variant="h6" component="h6">
													<PlaceIcon />
													{site}
												</Typography>
												<Typography gutterBottom variant="h6" component="h6">
													{date}
												</Typography>
												<Typography>{address}</Typography>
											</CardContent>
											<CardActions style={{ justifyContent: "center" }}>
												<Button size="small">Cancel</Button>
												<Button size="small" onClick={() => navigate("/home")}>
													Edit
												</Button>
												<Button
													size="small"
													target="_top"
													rel="noopener noreferrer"
													href={`mailto:test@example.com`}
												>
													Share
												</Button>
											</CardActions>
										</Card>
									</Grid>
								))}
							</>
						)}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
};

export default Reservations;
