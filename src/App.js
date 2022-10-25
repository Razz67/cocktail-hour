import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import About from "./pages/About";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<SingleCocktail />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}
