import ChatBubbleWing from "./ChatBubbleWing";

export const Gradient = () => {
	return (
		<div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
			<img
				className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
				src="/gradient.png"
				width={1417}
				height={1417}
				alt="Gradient"
			/>
		</div>
	);
};

export const PhotoChatMessage = () => {
	return (
		<div className="absolute top-16 right-12 max-w-[17.5rem] py-6 px-8 bg-[#3b3b3b] rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
			It was Property management internship
			<ChatBubbleWing className="absolute left-full bottom-0" />
		</div>
	);
};

export const VideoChatMessage = () => {
	return (
		<div className="absolute top-8 left-[3.125rem] w-full pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base max-w-[14rem]  md:max-w-[21rem] lg:max-w-[24rem]">
			Story board / Guide video (translation job included) for Samsung RMS 2.0
			<ChatBubbleWing
				className="absolute right-full bottom-0 -scale-x-100"
				pathClassName="fill-n-6"
			/>
		</div>
	);
};

export const VideoBar = () => {
	return (
		<div className="absolute left-0 bottom-0 w-full flex items-center p-6">
			<img
				src="/play.svg"
				width={24}
				height={24}
				alt="Play"
				className="object-contain mr-3"
			/>

			<div className="flex-1 bg-[#D9D9D9]">
				<div className="w-1/2 h-0.5 bg-color-1"></div>
			</div>
		</div>
	);
};
