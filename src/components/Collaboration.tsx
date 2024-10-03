import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants/constant";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { cn } from "../util/cn";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
	return (
		<Section
			id="collaboration"
			crosses={true}>
			<div className="container lg:flex">
				<div className="max-w-[25rem]">
					<h2 className="h2 mb-4 md:mb-8">
						AI Chat App for seamless collaboration
					</h2>
					<ul className="max-w-[22rem] mb-10 md:mb-14">
						{collabContent.map((item) => (
							<li
								key={item.id}
								className="mb-3 py-3">
								<p className="flex items-center">
									<img
										src={check}
										alt="check icon"
										width={24}
										height={24}
									/>
									<span className="ml-5 body-2">{item.title}</span>
								</p>
								{item.text && (
									<span className="block mt-3 body-2 text-n-4">
										{item.text}
									</span>
								)}
							</li>
						))}
					</ul>
					<Button>Try it now</Button>
				</div>

				<div className="mt-4 lg:ml-auto xl:w-[38rem] lg:mt-0">
					<p className="mb-16 body-2 text-n-4 md:w-[40rem] lg:mb-32 lg:w-[22rem]">
						{collabText}
					</p>

					<div className="w-[22rem] flex relative left-1/2 aspect-square border border-n-6 rounded-full -translate-x-1/2 sacle:75 md:scale-100">
						<div className="w-60 m-auto aspect-square flex border border-n-6 rounded-full">
							<div className="w-[6rem] m-auto p-[0.2rem] flex aspect-square bg-conic-gradient rounded-full">
								<div className="w-full h-full flex items-center justify-center bg-n-8 rounded-full">
									<img
										src={brainwaveSymbol}
										alt="brainwave"
										width={48}
										height={48}
									/>
								</div>
							</div>
						</div>

						<ul>
							{collabApps.map((item, idx) => (
								<li
									key={item.id}
									className={cn(
										"absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom ",
										`rotate-${idx * 45}`,
									)}>
									<span
										className={cn(
											"w-[3.2rem] aspect-square flex relative -top-[1.6rem]   border border-n-1/15 bg-n-7 rounded-xl",
											`-rotate-${idx * 45}`,
										)}>
										<img
											className="m-auto"
											src={item.icon}
											alt={item.title}
											width={item.width}
											height={item.height}
										/>
									</span>
								</li>
							))}
						</ul>
						<LeftCurve />
						<RightCurve />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Collaboration;
