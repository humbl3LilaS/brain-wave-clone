import { check, service1, service2, service3 } from "../assets";
import {
	brainwaveServices,
	brainwaveServicesIcons,
} from "../constants/constant";
import {
	Gradient,
	PhotoChatMessage,
	VideoBar,
	VideoChatMessage,
} from "../design/Services";
import { cn } from "../util/cn";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
	return (
		<Section id="how-to-use">
			<div className="container">
				<Heading
					title="Generative AI made for creators"
					body="Brainwave unlocks the potential of AI-powered applications"
				/>

				<div className="relative">
					{/* Frist Services Start */}
					<div className="h-[39rem] p-8 mb-5 flex items-center relative z-1 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
						{/* banner */}
						<div className="w-full h-full absolute top-0 left-0 pointer-events-none md:w-3/5 xl:w-auto">
							<img
								className="w-full h-full object-cover md:object-right"
								width={800}
								height={730}
								src={service1}
								alt="photo banner of AI"
							/>
						</div>
						<div className="max-w-[20rem] ml-auto relative z-1">
							<h4 className="mb-4 h4">Smartest AI</h4>
							<p className="body-2 text-n-3">
								Brainwave unlocks the potential of AI-Powered applications
							</p>
							<ul className="mt-6 flex flex-col body-2">
								{brainwaveServices.map((item) => (
									<li
										key={item}
										className="py-6 flex items-center gap-x-6 border-t border-n-6">
										<img
											src={check}
											width={24}
											height={24}
											alt="check"
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<Generating className=" absolute left-4 right-4 bottom-4 border border-n-1/10  lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-3/5" />
					</div>
					{/* Frist Services End */}

					{/* Grid Contiainer Start */}
					<div className="grid gap-5 relative z-1 lg:grid-cols-2">
						{/* Second Service Start*/}
						<div className="min-h-[39rem] relative border border-n-1/10 rounded-3xl overflow-hidden">
							<div className="absolute inset-0">
								<img
									className="w-full h-full object-cover"
									src={service2}
									alt="robot"
								/>
							</div>
							<div className="w-full h-full p-8 flex flex-col justify-end relative z-1 bg-gradient-to-b from-n-8/10 to-n-8/90 lg:p-15">
								<h4 className="mb-4 h4">Photo editing</h4>
								<p className="body-2 text-n-3">
									Automatically enhance your photos using our AI app's photo
									editing feature. Try it now!
								</p>
							</div>
							<PhotoChatMessage />
						</div>
						{/* Second Services End */}

						{/* Thrid Service Start*/}
						<div className="p-4 rounded-3xl bg-n-7 overflow-hidden lg:min-h-[46rem]">
							<div className="py-12 px-4 xl:px-8">
								<h4 className="mb-4 h4">Video generation</h4>
								<p className="mb-3 body-2 text-n-3">
									The world's most powerful AI photo and video art generation
									engine. What will you create?
								</p>
								<ul className="flex items-center justify-between">
									{brainwaveServicesIcons.map((item, idx) => (
										<li
											key={idx}
											className={cn(
												"aspect-square flex items-center justify-center rounded-2xl",
												idx === 2
													? "w-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem]"
													: "w-10 bg-n-6 md:w-15",
											)}>
											<span
												className={cn(
													"block",
													idx === 2 &&
														"aspect-square w-full flex items-center justify-center rounded-2xl bg-n-7",
												)}>
												<img
													src={item}
													alt={`photo to icon ${item}`}
												/>
											</span>
										</li>
									))}
								</ul>
							</div>
							<div className="h-[20rem] relative rounded-xl overflow-hidden md:h-[25rem]">
								<img
									src={service3}
									alt="Scary robot"
									className="w-full h-full object-cover"
								/>
								<VideoChatMessage />
								<VideoBar />
							</div>
						</div>
						{/* Thrid Services End */}
					</div>
					{/* Grid Contiainer End */}
					<Gradient />
				</div>
			</div>
		</Section>
	);
};

export default Services;
