import { cn } from "../util/cn";
import TagLine from "./TagLine";

type HeadingProps = {
	className?: string;
	title: string;
	body?: string;
	tag?: string;
};

const Heading = ({ className, title, body, tag }: HeadingProps) => {
	return (
		<div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
			{tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
			<h2 className={"h2"}>{title}</h2>
			{body && <p className="mt-4 body-2 text-n-4">{body}</p>}
		</div>
	);
};

export default Heading;
