import { useLocation } from "react-router-dom";
import brainWave from "../assets/brainwave.svg";
import { navigation } from "../constants/constant";
import { cn } from "../util/cn";
import Button from "./Button";
import { HamburgerMenu } from "../design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Header = () => {
	const location = useLocation();

	const [openNavigation, setOpenNavigation] = useState(false);

	return (
		<section
			className={cn(
				"w-full fixed top-0 z-50 border-b border-n-6  backdrop-blur-sm",
				openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm",
			)}>
			<header className="px-5 flex items-center lg:px-7.5 xl:px-10 max-lg:py-4">
				<a
					className="block w-[12rem] xl:mr-8"
					href="#hero">
					<img
						src={brainWave}
						width={190}
						height={40}
						alt="Barinwave"
					/>
				</a>

				<nav
					className={cn(
						"fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent",
						openNavigation
							? "h-screen items-center justify-center flex flex-col"
							: "hidden",
					)}>
					<ul className="m-auto relative z-2 flex flex-col items-center justify-center lg:flex-row">
						{navigation.map((item) => (
							<a
								key={item.id}
								href={item.url}
								className={cn(
									"p-6 block relative font-code text-2xl text-n-1 uppercase transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12",
									item.onlyMobile && "lg:hidden",
									item.url === location.hash
										? "z-2 lg:text-n-1"
										: "lg:text-n-1/50",
								)}>
								{item.title}
							</a>
						))}
					</ul>
					<HamburgerMenu />
				</nav>

				<a
					href="#singup"
					className={
						"hidden mr-8 text-n-1/50 button transition-colors hover:text-n-1 lg:block"
					}>
					new acccount
				</a>
				<Button className="hidden lg:flex">Sign up</Button>
				<Button
					className={"ml-auto lg:hidden"}
					onClick={() => {
						setOpenNavigation((prev) => !prev);
					}}>
					<MenuSvg openNavigation={openNavigation} />
				</Button>
			</header>
		</section>
	);
};

export default Header;
