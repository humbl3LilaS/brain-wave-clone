import { BrowserRouter } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Button>super button</Button>
			<ButtonGradient />
		</BrowserRouter>
	);
}

export default App;
