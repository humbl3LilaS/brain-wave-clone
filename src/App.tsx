import { BrowserRouter } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ButtonGradient />
		</BrowserRouter>
	);
}

export default App;
