import React from "react";
import './Error.css'

export const Error = ({message}) => {
	return <p className="text__error">{message}</p>;
};

export default Error;
