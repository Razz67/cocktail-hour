import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NonAlcoholCocktails } from "../redux/features/CocktailSlice";
import { Link, useParams } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import "bootstrap/dist/css/bootstrap.min.css";

export const NonAlcohol = () => {
	const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
	const [modifiedCocktail, setModifiedCoctail] = useState([]);
	const dispatch = useDispatch();
    const { id } = useParams();


	useEffect(() => {
		dispatch(NonAlcoholCocktails(id));
	}, [id]);

	useEffect(() => {
		if (cocktails) {
			const newCocktails = cocktails.map((item) => {
				const { idDrink, strDrink, strDrinkThumb } =
					item;

				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
				};
			});
			setModifiedCoctail(newCocktails);
		} else {
			setModifiedCoctail([]);
		}
	}, [id, cocktails]);

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
					const { id, name, image } = item;
					return (
						<div className="col" key={id}>
							<div className="card h-2">
								<img src={image} className="card-img-top" alt={name} />
								<div className="card-body" style={{ textAlign: "left" }}>
									<h5 className="card-title">{name}</h5>
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

