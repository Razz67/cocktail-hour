import "./index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Index";
import Header from "./components/Header";
import { SingleCocktail } from "./pages/SingleCocktail";

export default function App() {
	return (
		<div className="App">
		<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cocktail/:id" element={<SingleCocktail />} />
			</Routes>
		</div>
	);
}
