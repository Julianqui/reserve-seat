import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Error } from "../../components";
import { Member } from "../../mocks";
import { setMember } from "../../store/slices/auth";
import { Paper, AppBar } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Auth = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const [user, setUser] = useState();
	const [passw, setPassw] = useState();
	const [error, setError] = useState(false);
	const [msj, setMsj] = useState("");
	const [state, setState] = useState();

	const handlerLogin = (e) => {
		e.preventDefault();

		if ([user, passw].includes("")) {
			setError(true);
			setMsj("All field is requiered");
			setTimeout(() => {
				setError(false);
			}, 2000);
			return;
		}
		let coincidente = {
			name: Member.filter((u) => passw.includes(u.code)).map((u) => u.name),
			nationality: Member.filter((u) => passw.includes(u.code)).map(
				(u) => u.nationality
			),
			site: Member.filter((u) => passw.includes(u.code)).map((u) => u.site),
			mail: Member.filter((u) => user.includes(u.email)).map((u) => u.email),
			psw: Member.filter((u) => passw.includes(u.code)).map((u) => u.code),
		};

		if (user == coincidente.mail && passw == coincidente.psw) {
			dispatch(setMember(coincidente));
			navigate("/home");
			return;
		} else {
			setError(true);
			setMsj("The email or password is incorrect");
			setTimeout(() => {
				setError(false);
			}, 2000);
		}
		setUser("");
		setPassw("");
	};
	const theme = createTheme();
	return (
		<ThemeProvider theme={theme}>
			<Container component={Paper} elevation={5} maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Log in to your account
					</Typography>
					<Box
						component="form"
						onSubmit={handlerLogin}
						noValidate
						sx={{ mt: 1 }}
					>
						{error && <Error message={msj} />}
						<TextField
							margin="normal"
							required
							fullWidth
							id="user"
							label="Email Address"
							type="email"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(e) => setUser(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="passw"
							autoComplete="current-password"
							onChange={(e) => setPassw(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};
export default Auth;
