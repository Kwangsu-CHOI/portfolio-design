import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Grid = () => {
	return (
		<section id="about">
			<BentoGrid className="w-full py-20">
				{gridItems.map((item, i) => (
					<BentoGridItem
						id={item.id}
						key={i}
						title={item.title}
						description={item.description}
						// remove icon prop
						// remove original classname condition
						className={item.className}
						img={item.img}
						imgClassName={item.imgClassName}
						titleClassName={item.titleClassName}
						spareImg={item.spareImg}
					/>
				))}
			</BentoGrid>
			<a href="#projects" className="flex justify-center items-center mb-20">
				<MagicButton
					title="Browse My Projects"
					icon={<FaLocationArrow />}
					position="right"
				/>
			</a>
		</section>
	);
};

export default Grid;
