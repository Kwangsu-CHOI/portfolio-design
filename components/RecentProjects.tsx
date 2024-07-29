"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Button } from "./ui/MovingBorders";
import { LeftCurve, RightCurve } from "./ui/PortfolioDesign";
import Image from "next/image";
import TagLine from "./ui/TagLine";
import { useRouter } from "next/navigation";
import Link from "next/link";

const usedApps = [
	{
		id: "0",
		title: "Figma",
		icon: "/figma.png",
		width: 26,
		height: 36,
	},
	{
		id: "1",
		title: "HTML",
		icon: "/html.png",
		width: 34,
		height: 36,
	},
	{
		id: "2",
		title: "react",
		icon: "/react.png",
		width: 36,
		height: 28,
	},
	{
		id: "3",
		title: "CSS",
		icon: "/css.png",
		width: 34,
		height: 35,
	},
	{
		id: "4",
		title: "Photoshop",
		icon: "/photoshop.png",
		width: 34,
		height: 34,
	},
	{
		id: "5",
		title: "mongodb",
		icon: "/mongodb.png",
		width: 34,
		height: 34,
	},
	{
		id: "6",
		title: "prisma",
		icon: "/prisma.png",
		width: 26,
		height: 34,
	},
	{
		id: "7",
		title: "nextjs",
		icon: "/nextjs.png",
		width: 38,
		height: 32,
	},
];

const contentApps = [
	{
		id: "0",
		title: "FULL STACK WEB APP",
		text: "Full stack / Front end web application, mainly using HTML/CSS, Tailwind css, Next.js, React, Prisma, MongoDB.",
	},
	{
		id: "1",
		title: "FRONT END WEB APP",
		text: "Front end Web Apps built using React, CSS/Tailwind",
	},
	{
		id: "2",
		title: "HTML project",
		text: "Design focused simple apps built using HTML/CSS",
	},
];

const RecentProjects = () => {
	const router = useRouter();
	return (
		<section id="projects">
			<div className="py-20">
				<h1 className="heading mb-10">
					Browse My <span className="text-purple">Recent Projects</span>
				</h1>

				{/* Intro */}
				<div className="container lg:flex">
					<div className="max-w-[25rem]">
						<h2 className="h2 mb-14 md:mb-18 text-3xl mt-6 font-extrabold">
							Portfolio: Full stack / Font-end web applications
						</h2>

						<ul className="max-w-[22rem] mb-10 md:mb-14 sm:mt-20">
							{contentApps.map((item) => (
								<li className="mb-3 py-3" key={item.id}>
									<div className="flex items-center">
										<img src="/check.svg" width={24} height={24} alt="check" />
										<h6 className="body-2 ml-5 font-bold">{item.title}</h6>
									</div>
									{item.text && (
										<p className="body-2 mt-3 text-n-4 text-neutral-300">
											{item.text}
										</p>
									)}
								</li>
							))}
						</ul>
					</div>

					<div className="lg:ml-auto xl:w-[38rem] mt-4">
						<p className="body-2 mb-3 text-neutral-400 md:mb-16 lg:mb-22 lg:w-[22rem] lg:mx-auto">
							Full stack / Front end web application, mainly using HTML/CSS,
							Tailwind css, Next.js, React, Prisma, MongoDB.
						</p>

						<div className="relative left-1/2 flex w-[20rem] md:w-[24rem] ;lg:w-[26rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-20 md:mt-0 lg:mt-0">
							<div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
								<div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
									<div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
										<img
											src="/webapp.svg"
											width={48}
											height={48}
											alt="brainwave"
										/>
									</div>
								</div>
							</div>

							<ul>
								{usedApps.map((app, index) => (
									<li
										key={app.id}
										className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
											index * 45
										}`}
									>
										<div
											className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
												index * 45
											}`}
										>
											<Image
												className="m-auto"
												width={app.width}
												height={app.height}
												alt={app.title}
												src={app.icon}
											/>
										</div>
									</li>
								))}
							</ul>

							<LeftCurve />
							<RightCurve />
						</div>
					</div>
				</div>
				{/* Description */}
				<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
					{projects.map((item) => (
						<div
							className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
							key={item.id}
						>
							<PinContainer title={item.link} href={item.link}>
								<Link
									href={item.link}
									rel="noopener noreferrer"
									target="_blank"
								>
									<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-15">
										<div
											className="relative w-full h-full overflow-hidden lg:rounded-3xl"
											style={{ backgroundColor: "#13162D" }}
										>
											<img src="/bg.png" alt="bgimg" />
										</div>
										<img
											src={item.img}
											alt="cover"
											className="z-10 absolute bottom-0"
										/>
									</div>

									<div className="flex justify-between items-center">
										<h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1 mt-2">
											{item.title}
										</h1>
										<TagLine>{item.sort}</TagLine>
									</div>

									<p
										className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
										style={{
											color: "#BEC1DD",
											margin: "1vh 0",
										}}
									>
										{item.des}
									</p>

									<div className="flex items-center justify-between mt-7 mb-3">
										<div className="flex items-center">
											{item.iconLists.map((icon, index) => (
												<div
													key={index}
													className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
													style={{
														transform: `translateX(-${5 * index + 2}px)`,
													}}
												>
													<img src={icon} alt="icon5" className="p-2" />
												</div>
											))}
										</div>

										<div className="flex justify-center items-center">
											<p className="flex lg:text-xl md:text-xs text-sm text-purple">
												Check Live Site
											</p>
											<FaLocationArrow className="ms-3" color="#CBACF9" />
										</div>
									</div>
								</Link>
							</PinContainer>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RecentProjects;
