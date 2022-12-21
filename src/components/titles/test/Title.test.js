import { render, screen } from "@testing-library/react";
import Title from "../Title";

test("renders learn react link", () => {
	render(<Title />);
	const linkElement = screen.render;
	expect(linkElement).toBeCalled;
});
