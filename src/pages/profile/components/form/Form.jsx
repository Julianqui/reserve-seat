import React, { useEffect, useState } from "react";
import { Error, Title } from "../../../../components/";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { setGlober } from "../../../../store/slices/glober/GloberSlice";

import { Member } from "../../../../mocks/member/Member";

//WE USUALLY USED THIS FORM TO SAVE THE DATA,
//BUT DUE TO LACK OF BACK END, WE USED THE "PROFILE" VERSION WITH MOCKED DATA

export const Form = ({ setValid }) => {
	const dispatch = useDispatch();
	const { globerName, globerEmail, globerNationality, globerSite } =
		useSelector((state) => state.globerTeam);
	const [group, setGroup] = useState([]);
	const [name, setName] = useState("");
	const [nationality, setNationality] = useState("");
	const [email, setEmail] = useState("");
	const [site, setSite] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		setName(globerName);
		setNationality(globerNationality);
		setEmail(globerEmail);
		setSite(globerSite);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([name, nationality, email, site].includes("")) {
			setError(true);
			return;
		}

		setError(false);

		let admin = Member.filter((u) => name.includes(u.name));

		// const objectProfile = {
		// 	name: admin.map((u) => u.name),
		// 	nationality: admin.map((u) => u.nationality),
		// 	email: admin.map((u) => u.email),
		// 	site: admin.map((u) => u.site),
		// };
		const objectProfile = {
			name,
			nationality,
			email,
			site,
		};

		dispatch(setGlober(objectProfile));

		setValid(true);

		setName("");
		setNationality("");
		setEmail("");
		setSite("");
	};

	return (
		<div className="">
			{group.map((mem) => (
				<div key={mem.id}>
					<p>{mem.id}</p>
				</div>
			))}
			<form onSubmit={handleSubmit} className="">
				<div className="container__form">
					<Title className="form__title" title="Complete the form" />
					{error && <Error message="All the fileds is required" />}
					<label htmlFor="name" className="">
						Full name
					</label>
					<input
						id="name"
						type="text"
						placeholder="Your name"
						className="container-input"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<label htmlFor="nationality" className="">
						Nationality
					</label>
					<input
						id="nationality"
						type="text"
						placeholder="Your nationality"
						className="container-input"
						value={nationality}
						onChange={(e) => setNationality(e.target.value)}
					/>

					<label htmlFor="email" className="">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Your email"
						className="container-input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="site" className="">
						Prefer site
					</label>
					<input
						id="site"
						className="container-input"
						placeholder="Your site"
						value={site}
						onChange={(e) => setSite(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
