import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularCocktails } from "../redux/features/CocktailSlice";
import { Link } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import "bootstrap/dist/css/bootstrap.min.css";

export const PopularCocktailList = () => {
	const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
	const [modifiedCocktail, setModifiedCoctail] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(PopularCocktails());
	}, []);

	useEffect(() => {
		if (cocktails) {
			const newCocktails = cocktails.map((item) => {
				const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
					item;

				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
					info: strAlcoholic,
					glass: strGlass,
				};
			});
			setModifiedCoctail(newCocktails);
		} else {
			setModifiedCoctail([]);
		}
	}, [cocktails]);

	if (loading) {
		return (
			<div className="spinner">
				<CircleLoader style={{ color: "#36d7b7" }} />
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{modifiedCocktail.map((item) => {
					const { id, name, image, glass, info } = item;
					return (
						<div className="col" key={id}>
							<div className="card h-2">
								<img src={image} className="card-img-top" alt={name} />

								<div className="card-body" style={{ textAlign: "left" }}>
									<h5 className="card-title">{name}</h5>
									<h4 className="card-title">{glass}</h4>
									<p className="card-text">{info}</p>

									<Link to={`/cocktail/${id}`}>
										<button className="btn btn-info">Details</button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PopularCocktailList;
