import { cn } from "../util/cn";

type HeadingProps = {
	className?: string;
	title: string;
};

const Heading = ({ className, title }: HeadingProps) => {
	return (
		<div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
			<h2 className={"h2"}>{title}</h2>
		</div>
	);
};

export default Heading;
