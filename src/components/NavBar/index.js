import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

export default function Navbar() {
	return (
		<>
			<Nav>
				<h1 style={{ color: "orangered", marginTop: "0.7rem" }}>
					The Cocktail Hour
				</h1>
				<Bars />

				<NavMenu>
					<NavLink to="/" activestyle="true">
						Home
					</NavLink>
					<NavLink to="/popularCocktails" activestyle="true">
						Popular Cocktails
					</NavLink>

					<NavLink to="/nonAlcohol" activestyle="true">
						Non-Alcoholic Drinks
					</NavLink>

					<NavLink to="/about" activestyle="true">
						About
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/blogs">Blog</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

