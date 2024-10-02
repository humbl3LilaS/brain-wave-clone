import { ReactNode } from "react";
import { cn } from "../util/cn";
import SectionSvg from "../assets/svg/SectionSvg";

type SectionProps = {
	children: ReactNode;
	id: string;
	className?: string;
	crosses?: boolean;
	crossesOffset?: string;
	customPadding?: boolean;
};

const Section = ({
	children,
	id,
	className,
	crosses,
	crossesOffset,
	customPadding,
}: SectionProps) => {
	return (
		<section
			id={id}
			className={cn(
				"relative",
				customPadding || "py-10 lg:py-16 xl:py-20",
				!customPadding && crosses && "lg:py-32 xl:py-40",
				className,
			)}>
			{children}
			<div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
			<div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

			{crosses && (
				<>
					<div
						className={cn(
							`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1  pointer-events-none lg:block xl:left-10 xl:right-10`,
							crossesOffset,
						)}
					/>
					<SectionSvg crossesOffset={crossesOffset} />
				</>
			)}
		</section>
	);
};

export default Section;
