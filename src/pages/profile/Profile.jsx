import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Button from "@mui/material/Button";

export const Profile = () => {
  const { nameAuth, nationalityAuth, emailAuth, siteAuth } = useSelector(
    (state) => state.auth
  );
  const [edit, setEdit] = useState(false);
  const canEdit = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <Header />
      <div className="profile__container">
        {nameAuth != "" ? (
          <div className="card profile__miniavatar">
            <div className="profile__img__containar">
              <img
                className="profile__img"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Profile Image"
              />
            </div>
            <div className="profile__miniprofile__info">
              <p className="profile__miniprofile__info__title">{nameAuth}</p>
              <p className="profile__miniprofile__info__text">
                {" "}
                Web UI Developer
              </p>
              <p className="profile__miniprofile__info__text">
                Tandil, Buenos Aires, Argentina
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
				<div className={"card profile__info "+ (nameAuth == "" ? "profile__info__full":"")}>
          <table className="profile__table">
            <tbody>
              <tr className="profile__info__row">
                <td className="profile__info__type">Full Name</td>
                {!edit && nameAuth != "" ? (
                  <td className="profile__info__value">{nameAuth}</td>
                ) : (
                  <input
                    className="profile__info__input"
                    type="text"
                    placeholder="Full Name"
                  />
                )}
              </tr>
              <tr className="profile__info__row">
                <td className="profile__info__type">Nationality</td>

                {!edit && nameAuth != "" ? (
                  <td className="profile__info__value">{nationalityAuth}</td>
                ) : (
                  <input
                    className="profile__info__input"
                    type="text"
                    placeholder="Nationality"
                  />
                )}
              </tr>
              <tr className="profile__info__row">
                <td className="profile__info__type">Email</td>
                {!edit && nameAuth != "" ? (
                  <td className="profile__info__value">{emailAuth}</td>
                ) : (
                  <input
                    className="profile__info__input"
                    type="text"
                    placeholder="Email"
                  />
                )}
              </tr>
              <tr className="profile__info__row__end">
                <td className="profile__info__type">Site</td>
                {!edit && nameAuth != "" ? (
                  <td className="profile__info__value">{siteAuth}</td>
                ) : (
                  <input
                    className="profile__info__input"
                    type="text"
                    placeholder="Site"
                  />
                )}
              </tr>
            </tbody>
          </table>
          {!edit && nameAuth != "" ? (
						<Button 
							className="profile__info__button"
							variant="Outlined" 
							onClick={canEdit}>
								Edit
						</Button>
						) : (
							<Button 
								className="profile__info__button"
								variant="Outlined" 
								onClick={canEdit}>
									Save
							</Button>
						)
					}	
        </div>
      </div>
    </div>
  );
};

export default Profile;
