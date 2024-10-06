import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "../design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";

const Pricing = () => {
	return (
		<Section id="pricing">
			<div className="container relative z-2">
				<div className="hidden mb-[6.5rem] relative lg:flex lg:justify-center">
					<img
						className="relative z-1"
						src={smallSphere}
						alt="Small sphere"
						width={255}
						height={255}
					/>
					<div className="w-[60rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
						<img
							className="w-full"
							src={stars}
							alt="starts"
						/>
					</div>
				</div>
				<Heading
					title="Pay once, use forever"
					tag="Get Started With Barinwave"
					className="text-center"
				/>
				<div className="relative">
					<PricingList />
					<LeftLine />
					<RightLine />
				</div>

				<div className="flex justify-center mt-10">
					<a className="pb-1 border-b border-transparent tracking-wider text-xs font-code font-bold  transition-colors duration-500 cursor-pointer hover:border-b-white ">
						See the full details
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Pricing;
