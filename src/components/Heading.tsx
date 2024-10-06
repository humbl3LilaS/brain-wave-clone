import { cn } from "../util/cn";

type HeadingProps = {
	className?: string;
	title: string;
	body?: string;
};

const Heading = ({ className, title, body }: HeadingProps) => {
	return (
		<div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
			<h2 className={"h2"}>{title}</h2>
			{body && <p className="mt-4 body-2 text-n-4">{body}</p>}
		</div>
	);
};

export default Heading;
