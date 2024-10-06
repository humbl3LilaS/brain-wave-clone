import { socials } from "../constants/constant";
import Section from "./Section";

const Footer = () => {
	return (
		<Section
			id="footer"
			className="!px-0 !py-10"
			crosses={true}>
			<div className="container flex justify-center items-center gap-10 sm:justify-between max-sm:flex-col">
				<p className="caption">
					&copy; {new Date().getFullYear()}. All rights reserved;
				</p>
				<ul className="flex gap-5 flex-wrap">
					{socials.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								className="aspect-square w-10 flex items-center justify-center rounded-full bg-n-7 transition-colors duration-500 hover:bg-n-6">
								<img
									width={16}
									height={16}
									src={item.iconUrl}
									alt={item.title}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
};

export default Footer;
