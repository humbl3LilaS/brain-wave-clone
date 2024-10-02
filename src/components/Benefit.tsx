import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants/constant";
import { GradientLight } from "../design/Benefits";
import Heading from "./Heading";
import Section from "./Section";

const Benefit = () => {
	return (
		<Section id="features">
			<div className="container relative z-2">
				<Heading
					title="Chat Smarter, Not Harder with Brainwave"
					className="md:max-w-md lg:max-w-2xl text-center"
				/>
				<div className="mb-10 flex flex-wrap gap-10">
					{benefits.map((item) => (
						<div
							key={item.id}
							className="p-0.5 block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
							style={{
								backgroundImage: `url(${item.backgroundUrl})`,
							}}>
							<div className="min-h-[22rem] p-[2.4rem] flex flex-col relative z-20 pointer-events-none">
								<h5 className="h2 mb-5 lg:h5">{item.title}</h5>
								<p className="body-2 mb-6 text-n-3">{item.text}</p>
								<div className="mt-auto flex items-center ">
									<img
										width={48}
										height={48}
										src={item.iconUrl}
										alt={item.title}
									/>
									<p className="ml-auto font-code text-sm font-bold text-n-1 uppercase tracking-wider">
										Explore more
									</p>
									<Arrow />
								</div>
							</div>

							{item.light && <GradientLight />}
							<div
								className="absolute inset-0.5 bg-n-8"
								style={{ clipPath: "url(#benefits)" }}>
								<div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-10">
									{item.imageUrl && (
										<img
											src={item.imageUrl}
											width={380}
											height={362}
											alt={item.title}
											className="w-full h-full object-cover"
										/>
									)}
								</div>
							</div>
							<ClipPath />
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Benefit;
