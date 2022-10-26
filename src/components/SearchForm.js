import React, { useRef } from "react";
import "./SearchForm.css";

const SearchForm = () => {
	const searchValue = useRef();
	return (
		<section className="search section">
			<form className="search-form">
				<div className="form-control">
					<label htmlFor="name">Search for a Cocktail</label>
					<input type="text" name="name" id="name" ref={searchValue} placeholder="Enter a drink name" />
				</div>
			</form>
		</section>
	);
}

export default SearchForm;
