import { companyLogos } from "../constants/constant";
import { cn } from "../util/cn";

const CompanyLogos = ({ className }: { className?: string }) => {
	return (
		<div className={cn("", className)}>
			<h5 className="mb-6 tagline text-center text-n-1/50">
				Helping people create beautiful content at
			</h5>
			<ul className="flex">
				{companyLogos.map((item) => (
					<li
						key={item}
						className="h-[8.5rem] flex items-center justify-center flex-1">
						<img
							src={item}
							width={134}
							height={28}
							alt={item}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CompanyLogos;
