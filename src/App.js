import { Route, Routes} from "react-router-dom"
import Home from "./components/pages/Home";
import SingleCoctail from "./components/pages/SingleCoctail";
import  About from "./components/pages/About";


export default function App() {
	return (
		<div className="App">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<SingleCoctail />} />
			<Route path="/about" element={<About />} />
		</Routes>
		</div>
	)
}

