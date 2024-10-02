import { loading } from "../assets";
import { cn } from "../util/cn";

const Generating = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"h-[3.5rem] px-6 flex items-center bg-n-8/80 rounded-[1.7rem] text-base",
				className,
			)}>
			<img
				className="aspect-square w-5 mr-4"
				src={loading}
				alt="icon for loading..."
			/>
			<span>AI is generating</span>
		</div>
	);
};

export default Generating;
