import { BrowserRouter } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";

function App() {
	return (
		<BrowserRouter>
			<div className="pt-[4.75rem] lg:pt-[5.25rem]">
				<Header />
				<Hero />
				<Benefit />
				<Collaboration />
				<Services />
				<Pricing />
				<Roadmap />
			</div>
			<ButtonGradient />
		</BrowserRouter>
	);
}

export default App;
