import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
	const descFirst = [
		"Distinction Avg ++",
		"\n",
		"Focused on UX/UI as well as Project Management",
		"\n",
		"Published paper on ENASE 2022. (Topic: Developing Accessible eHealth Portals: A Human-centred Approach)",
		"\n",
		"Participated in the thesis; A Human-centric Accessible eHealth Booking Web Portal.",
		"\n",
		"Also, finished subjects related to Data Science: MongoDB & Cassandra, R, and Cypher Query Language for Neo4j.",
	];
	const descF =
		"Distinction Avg ++ \n Focused on UX/UI as well as Project Management \n Published paper on ENASE 2022. (Topic: Developing Accessible eHealth Portals: A Human-centred Approach) \n Participated in the thesis; A Human-centric Accessible eHealth Booking Web Portal. \n Also, finished subjects related to Data Science: MongoDB & Cassandra, R, and Cypher Query Language for Neo4j.";

	const lb = (text: string) => {
		return text.replace(/\n/g, "<br />");
	};

	return (
		<section className="w-full py-20" id="education">
			<h1 className="heading">
				Education <span className="text-purple">History</span>
			</h1>
			{/* remove bg-white dark:bg-black */}
			<div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
				{/* add des prop */}
				<Card
					title="Master of IT"
					name="Monash University"
					icon={<AceternityIcon order="Master" />}
					des={
						"✅ Distinction Avg ++ \n ✅ Focused on UX/UI as well as Project Management \n ✅ Published paper on ENASE 2022. (Topic: Developing Accessible eHealth Portals: A Human-centred Approach) \n ✅ Participated in the thesis; A Human-centric Accessible eHealth Booking Web Portal. \n ✅ Also, finished subjects related to Data Science: MongoDB & Cassandra, R, and Cypher Query Language for Neo4j."
					}
				>
					<CanvasRevealEffect
						animationSpeed={5.1}
						// add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
						containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
					/>
				</Card>
				<Card
					title="Master of Professional Accounting"
					name="Monash University"
					icon={<AceternityIcon order="Master" />}
					des={
						"✔️ Focused on Accounting Information System and Management Accounting subjects.\n ✔️ Finished project regarding Financial Reporting Issues.\n ✔️Finished management accounting projects using Microsoft Access."
					}
				>
					<CanvasRevealEffect
						animationSpeed={3}
						// change bg-black to bg-pink-900
						containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
						colors={[
							// change the colors of the
							[255, 166, 158],
							[221, 255, 247],
						]}
						dotSize={2}
					/>
					{/* Radial gradient for the cute fade */}
					{/* remove this one */}
					{/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
				</Card>
				<Card
					title="Bachelor of International Finance"
					name="The University of Adelaide"
					icon={<AceternityIcon order="Bachelor" />}
					des={
						"☑️ Risk Analysis based on available information from the company's finanacial statements and other disclosures.\n☑️ Accounting completion papers (financial statements) through the use of accounting software, MYOB\n☑️ Successfully finished assignments regarding risk and portfolio management."
					}
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
						colors={[[125, 211, 252]]}
					/>
				</Card>
			</div>
		</section>
	);
};

export default Approach;

const Card = ({
	title,
	name,
	icon,
	children,
	// add this one for the desc
	des,
}: {
	title: string;
	name: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
	des: string;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			// change h-[30rem] to h-[35rem], add rounded-3xl
			className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
			style={{
				//   add these two
				//   you can generate the color from here https://cssgradient.io/
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			{/* change to h-10 w-10 , add opacity-30  */}
			<Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
			<Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
			<Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
			<Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20 px-10">
				<div
					// add this for making it center
					// absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
					className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
				>
					{icon}
				</div>
				<h2
					// change text-3xl, add text-center
					className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
				>
					{title}
				</h2>
				<h2
					// change text-3xl, add text-center
					className="dark:text-white text-center text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
				>
					{name}
				</h2>
				{/* add this one for the description */}
				<p
					className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-start group-hover/canvas-card:-translate-y-2 transition duration-200 whitespace-pre-line"
					style={{ color: "#E4ECFF" }}
				>
					{des}
				</p>
			</div>
		</div>
	);
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
	return (
		<div>
			{/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
			{/* change rounded-lg, text-purple px-5 py-2 */}
			{/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
			{/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
			<button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span
					className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
				>
					{order}
				</span>
			</button>
		</div>
		// remove the svg and add the button
		// <svg
		//   width="66"
		//   height="65"
		//   viewBox="0 0 66 65"
		//   fill="none"
		//   xmlns="http://www.w3.org/2000/svg"
		//   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
		// >
		//   <path
		//     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
		//     stroke="currentColor"
		//     strokeWidth="15"
		//     strokeMiterlimit="3.86874"
		//     strokeLinecap="round"
		//     style={{ mixBlendMode: "darken" }}
		//   />
		// </svg>
	);
};

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...rest}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
		</svg>
	);
};