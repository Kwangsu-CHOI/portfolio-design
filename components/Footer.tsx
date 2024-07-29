import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
	return (
		<footer className="w-full mb-[100px] md:mb-5 lg:mb-5 pb-10" id="contact">
			{/* background grid */}

			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Reach out to <span className="text-purple">ME</span> for your next
					project!!!
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Click below to contact me at{" "}
					<span className="text-purple">wisecks@gmail.com</span>.
				</p>
				<a href="mailto:wisecks@gmail.com">
					<MagicButton
						title="Email me"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light text-slate-400">
					Copyright © 2024
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map((info) => (
						<div
							key={info.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={info.img} alt="icons" width={20} height={20} />
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
