import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import PlusSvg from "./ui/PlusSvg";
import { Button } from "./ui/MovingBorders";

export const BottomLine = () => {
	return (
		<>
			<div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

			<PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

			<PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
		</>
	);
};

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			{/**
			 *  UI: Spotlights
			 *  Link: https://ui.aceternity.com/components/spotlight
			 */}
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			{/**
			 *  UI: grid
			 *  change bg color to bg-black-100 and reduce grid color from
			 *  0.2 to 0.03
			 */}
			<div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div
					// chnage the bg to bg-black-100, so it matches the bg color and will blend in
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-10 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[3.25rem]">
						<h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
							<TextGenerateEffect
								words="Transforming Idea into Best User Experiences."
								className="text-center text-[40px] md:text-5xl lg:text-6xl"
							/>
							<span className="text-3xl mb-3">
								.{` `}.{` `}.{` `}.{` `}.{` `}.{` `}.{` `}.{` `}
							</span>
							<br />I am {` `}
							<span className="inline-block relative mb-5">
								<TextGenerateEffect
									words="Kwangsu CHOI"
									className="text-center text-[40px] md:text-5xl lg:text-6xl"
								/>
								<img
									src="/curve.png"
									className="absolute top-full left-0 w-full xl:-mt-2"
									width={624}
									height={28}
									alt="Curve"
								/>
							</span>
						</h1>
						<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
							Experienced professional with a diverse academic background
							encompassing International Finance, Accounting (Master&apos;s),
							and IT (Master&apos;s). Published a research paper on UX/UI
							focusing on user accessibility during master studies. Possesses 3
							years of experience as an Online Sales Administrator, adept at
							managing online-based sales platforms such as Naver Market and
							Coupang. Known for rapid learning and fostering effective team
							communication to drive collaborative success.
						</p>
					</div>

					<a href="#about">
						<MagicButton
							title="More About Me"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
