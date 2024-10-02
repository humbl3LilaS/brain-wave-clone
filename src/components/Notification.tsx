import { notification1 } from "../assets";
import { notificationImages } from "../constants/constant";
import { cn } from "../util/cn";

const Notification = ({
	className,
	title,
}: {
	className?: string;
	title: string;
}) => {
	return (
		<div
			className={cn(
				"p-4 pr-6 flex items-center gap-5 bg-n-9/40 backdrop-blur border border-n-1-/10 rounded-2xl",
				className,
			)}>
			<img
				src={notification1}
				width={62}
				height={62}
				alt="image"
				className="rounded-xl"
			/>

			<div className="flex-1">
				<h6 className="mb-1 font-semibold text-base">{title}</h6>
				<div className="flex items-center justify-between">
					<ul className="-m-0.5 flex">
						{notificationImages.map((item) => (
							<li
								key={item}
								className=" w-6 h-6 flex border-2 border-n-12 rounded-full overflow-hidden">
								<img
									src={item}
									className="w-full"
									width={20}
									height={20}
									alt="item"
								/>
							</li>
						))}
					</ul>
					<div className="body-2 text-n-13">1m ago</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
