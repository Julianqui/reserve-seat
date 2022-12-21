import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./HomeModal.css";

const HomeModal = (props) => {
	const selectedDesk = "Desk nro 8";

	const availableDesk = (
		<div className="emptyDeskContainer">
			<p className="available inlineText">Available </p>
			<p className="inlineText">{selectedDesk}</p>
			<p className="deskOwner">No one has reserved this desk</p>
			<Button className="buttonReserved" variant="contained" size="small">
				Reserve desk
			</Button>
		</div>
	);

	const unavailableDesk = (
		<div>
			<p className="unavailable inlineText">Unavailable </p>
			<p className="inlineText">{selectedDesk}</p>
			<div className="deskReserved">
				<p className="deskReservedTitle">Desk reserved by</p>
				<div className="avatarContainer">
					<Avatar sx={{ width: 24, height: 24 }}>JG</Avatar>
				</div>
				<p> Julieta Gonzales</p>
			</div>
		</div>
	);

	const ownedDesk = (
		<div>
			<p className="reserved inlineText">Reserved </p>
			<p className="inlineText">{selectedDesk}</p>
			<p className="reservedText">This desk is reserved by you</p>
			<Button className="buttonReservedBorder" variant="outlined" size="small">
				Cancel
			</Button>
			<Button className="buttonReserved" variant="contained" size="small">
				Share
			</Button>
		</div>
	);

	return (
		<div className="modalContainer">
			<div className="modalHeader">
				{props.title} - {props.floor}
			</div>
			<div className="modalBody">
				<div className="selectedChair">
					<p className="time">
						{/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m31.35 33.65 2.25-2.25-7.95-8V13.35h-3V24.6ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24t1.575-7.75q1.575-3.65 4.3-6.375 2.725-2.725 6.375-4.3Q19.9 4 24 4t7.75 1.575q3.65 1.575 6.375 4.3 2.725 2.725 4.3 6.375Q44 19.9 44 24t-1.575 7.75q-1.575 3.65-4.3 6.375-2.725 2.725-6.375 4.3Q28.1 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z"/></svg> */}
						{"Mar 25 "} | {props.from} to {props.to}
					</p>
					{!props.selectedDesk ? (
						<p>No desk selected</p>
					) : props.owned ? (
						ownedDesk
					) : props.availableDesk ? (
						availableDesk
					) : (
						unavailableDesk
					)}
				</div>
			</div>
		</div>
	);
};
export default HomeModal;
