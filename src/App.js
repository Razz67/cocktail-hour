import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Index";
import { SingleCocktail } from "./pages/SingleCocktail";
import { PopularCocktails } from "./redux/features/CocktailSlice";
import { NonAlcohol } from "./pages/NonAlcohol";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Navbar from "./components/NavBar";

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Home />} />

				<Route path="/popularCocktails" exact element={<PopularCocktails />} />

				<Route path="/cocktail/:id" element={<SingleCocktail />} />

				<Route path="/nonAlcohol" element={<NonAlcohol />} />

				<Route path="/about" element={<About />} />

				<Route path="/blogs" element={<Blogs />} />
			</Routes>
		</div>
	);
}
