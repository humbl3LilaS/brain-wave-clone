import { ReactNode } from "react";
import { cn } from "../util/cn";
import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProp = {
	children: ReactNode;
	className?: string;
	white?: boolean;
	onClick?: () => void;
};

const Button = ({ children, className, white, onClick }: ButtonProp) => {
	return (
		<button
			className={cn(
				"h-11 px-7 block items-center justify-center  relative button transition-colors hover:text-color-1",
				white ? "text-n-8" : "text-n-1",
				className,
			)}
			onClick={onClick}>
			<span className="relative z-20">{children}</span>
			{ButtonSvg(white)}
		</button>
	);
};

export default Button;
