import { BrowserRouter } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Hero />
			<ButtonGradient />
		</BrowserRouter>
	);
}

export default App;
