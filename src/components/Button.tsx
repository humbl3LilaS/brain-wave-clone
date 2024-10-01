import { ReactNode } from "react";
import { cn } from "../util/cn";
import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProp = {
	children: ReactNode;
	className?: string;
	white?: boolean;
};

const Button = ({ children, className, white }: ButtonProp) => {
	console.log("button render");

	return (
		<button
			className={cn(
				"h-11 px-7 inline-flex items-center justify-center relative button transition-colors hover:text-color-1",
				white ? "text-n-8" : "text-n-1",
				className,
			)}>
			<span className="relative z-20">{children}</span>
			{ButtonSvg(white)}
		</button>
	);
};

export default Button;
