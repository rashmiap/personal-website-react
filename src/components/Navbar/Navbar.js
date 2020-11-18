import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";
import headerList from "../../data/Navigation";

const Navigation = styled.nav`
	display: flex;
	position: relative;
	@media (max-width: 768px) {
		height: 6vh;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
	}
`;

const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;
	@media (max-width: 768px) {
		display: flex;
		z-index: 10;
	}
`;

const Navbox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		position: fixed;
		width: 100%;
		z-index: 9;
		justify-content: flex-start;
		background-color: #060144;
		transition: all 0.3s ease-in;
		left: ${(props) => (props.open ? "-100%" : "0")};
		padding-top: 20%;
		top: 0;
	}
`;

const Hamburger = styled.div`
	background-color: #ffffff;
	width: 32px;
	height: 2px;
	transition: all 0.3s linear;
	align-self: center;
	position: relative;
	transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};
	::before,
	::after {
		width: 32px;
		height: 2px;
		background-color: #ffffff;
		content: "";
		position: absolute;
		transition: all 0.3s linear;
	}
	::before {
		transform: ${(props) =>
			props.open
				? "rotate(-90deg) translate(-10px, 0px)"
				: "rotate(0deg)"};
		top: -10px;
	}
	::after {
		opacity: ${(props) => (props.open ? "0" : "1")};
		transform: ${(props) =>
			props.open ? "rotate(90deg) " : "rotate(0deg)"};
		top: 10px;
	}
`;
const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<Navigation>
			<Toggle
				navbarOpen={navbarOpen}
				onClick={() => setNavbarOpen(!navbarOpen)}
			>
				{navbarOpen ? <Hamburger open /> : <Hamburger />}
			</Toggle>
			<Navbox open={!navbarOpen}>
				{headerList.map((navItem) => (
					<NavbarLinks info={navItem} key={navItem.label} />
				))}
			</Navbox>
		</Navigation>
	);
};

export default Navbar;
