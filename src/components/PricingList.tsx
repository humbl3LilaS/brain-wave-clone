import { check } from "../assets";
import { pricing } from "../constants/constant";
import Button from "./Button";

const PricingList = () => {
	return (
		<div className="flex items-center gap-[1rem] max-lg:flex-wrap">
			{pricing.map((item) => (
				<div
					id={item.id}
					key={item.title}
					className="w-[19rem] h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 
                    [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 max-lg:w-full">
					<h4 className="mb-4 h4">{item.title}</h4>
					<p className="min-h-16 mb-3 body-2 text-n-1/50`">
						{item.description}
					</p>
					<p className="h-[5.5rem] flex items-center">
						{item.price && (
							<>
								<span className="h3">$</span>
								<span className="text-[5.5rem] leading-none font-bold">
									{item.price}
								</span>
							</>
						)}
					</p>
					<Button className={"w-full mb-6"}>
						{item.price ? "Get Started" : "Contact us"}
					</Button>
					<ul>
						{item.features.map((feat, idx) => (
							<li
								key={idx}
								className="py-5 flex items-center gap-x-4  border-t border-n-6">
								<img
									src={check}
									alt="check"
									width={24}
									height={24}
								/>
								<span className="body-2">{feat}</span>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default PricingList;
