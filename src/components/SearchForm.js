import React, { useRef } from "react";
import "./SearchForm.css";
import { useDispatch } from "react-redux";
import { fetchSearchCocktail } from "../redux/features/CocktailSlice";

const SearchForm = () => {
	const searchValue = useRef();
	const dispatch = useDispatch();

	const handleChange = () => {
		const searchText = searchValue.current.value;
		dispatch(fetchSearchCocktail({ searchText }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

	};


	return (
		<section className="search section">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Search for a Cocktail</label>
					<input type="text" name="name" id="name" ref={searchValue} placeholder="Enter a drink name" 
					onChange={handleChange} />
				</div>
			</form>
		</section>
	);
}

export default SearchForm;
