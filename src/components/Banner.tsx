import { robot, heroBackground } from "../assets";
import { BackgroundCircles, Gradient } from "../design/Hero";
import { heroIcons } from "../constants/constant";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

const Banner = () => {
	const parallaxRef = useRef(null);

	return (
		<div className="max-w-[23rem] mx-auto relative md:max-w-3xl xl:mb-24">
			<div className="p-0.5 relative z-1 rounded-2xl bg-conic-gradient">
				<div className="relative bg-n-8 rounded-[1rem]">
					<div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
					<div className="aspect[33/40] rounded-t-[0.9rem] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
						<img
							src={robot}
							className="w-full  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
							width={1024}
							height={490}
							alt="hero image"
						/>

						<ScrollParallax isAbsolutelyPositioned={true}>
							<Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
						</ScrollParallax>

						<ScrollParallax
							isAbsolutelyPositioned={true}
							ref={parallaxRef}>
							<ul className="px-1 py-1 hidden absolute -left-[5.5rem] bottom-[7.5rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
								{heroIcons.map((icon) => (
									<li
										key={icon}
										className="p-5">
										<img
											src={icon}
											width={24}
											height={25}
											alt={`icon of ${icon}`}
										/>
									</li>
								))}
							</ul>
						</ScrollParallax>

						<ScrollParallax isAbsolutelyPositioned={true}>
							<Notification
								className={
									"w-[18rem] hidden absolute -right-[5.5rem] bottom-[8rem] xl:flex"
								}
								title="Code generation"
							/>
						</ScrollParallax>
					</div>
				</div>
				<Gradient />
			</div>
			<div className="w-[234%] absolute -top-[54%] left-1/2 -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
				<img
					src={heroBackground}
					className="block w-full"
					width={1440}
					height={1800}
					alt="hero background"
				/>
			</div>
			<BackgroundCircles />
		</div>
	);
};

export default Banner;
