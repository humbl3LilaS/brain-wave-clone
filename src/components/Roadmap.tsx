import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants/constant";
import { cn } from "../util/cn";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";

const Roadmap = () => {
	return (
		<Section
			id="roadmap"
			className="overflow-hidden">
			<div className="container md:pb-10">
				<Heading
					title="What we are working on"
					tag="ready to get started"
				/>
				<div className="grid gap-6 relative md:grid-cols-2 md:gap-4 md:pb-[7rem]">
					{roadmap.map((item) => (
						<div
							key={item.id}
							className={cn(
								"p-0.25 rounded-[2.5rem] md:flex even:md:translate-y-[7rem]",
								item.colorful ? "bg-conic-gradient" : "bg-n-6",
							)}>
							<div className="relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15">
								<div className="max-w-full absolute inset-0">
									<img
										className="w-full "
										width={550}
										height={550}
										src={grid}
										alt="grid"
									/>
								</div>
								<div className="relative z-1">
									<div className="max-w-[27rem] mb-8 flex items-center justify-between md:mb-20">
										<TagLine>{item.date}</TagLine>
										<div className="px-4 py-1 flex items-center gap-x-2 rounded bg-n-1 text-n-8">
											<img
												width={16}
												height={16}
												src={item.status === "done" ? check2 : loading1}
												alt={item.status === "done" ? "check" : "loading"}
											/>
											<div className="tagline">
												{item.status === "done" ? "Done" : "In Progress"}
											</div>
										</div>
									</div>

									<div className="mb-10 -my-10 -mx-15">
										<img
											src={item.imageUrl}
											className="w-full"
											width={640}
											height={420}
											alt={item.title}
										/>
									</div>
									<h4 className="mb-4 h4">{item.title}</h4>
									<p className="body-2 text-n-2">{item.text}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<Button className="mt-8 mx-auto">Our Roadmap</Button>
			</div>
		</Section>
	);
};

export default Roadmap;
