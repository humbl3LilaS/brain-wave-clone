import Section from "./Section";
import { curve } from "../assets";
import Button from "./Button";
import Banner from "./Banner";
import { BottomLine } from "../design/Hero";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
	return (
		<Section
			id="hero"
			className={"pt-[12rem] -mt-[5.25rem]"}
			crosses={true}
			crossesOffset="lg:translate-y-[5.25rem]"
			customPadding={true}>
			<div className="container relative">
				<div className="max-w-[62rem] mx-auto mb-[4rem] relative z-1 md:mb-20 lg:mb-[6rem]">
					<h1 className="max-w-4xl h2 mb-6 mx-auto uppercase text-center lg:h1">
						Explore the Possibilities of ai chatting with
						<span className="inline-block relative">
							BrainWave
							<img
								src={curve}
								alt="curve wave"
								className="w-full absolute top-full left-0 xl:-mt-2"
								width={624}
								height={28}
							/>
						</span>
					</h1>
					<p className="max-w-2xl mb-6 mx-auto body-1 text-n-2 text-center lg:mb-8">
						Unleash the power of AI within Brainwave. Upgrade your productivity
						with Brainwave, the open AI chat app.
					</p>
					<Button
						white
						className="mx-auto">
						Get Started
					</Button>
				</div>
				<Banner />
				<CompanyLogos className="mt-20 hidden relative z-10 lg:block" />
			</div>

			<BottomLine />
		</Section>
	);
};

export default Hero;
