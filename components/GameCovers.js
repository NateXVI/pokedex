import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GameCovers({ games }) {
	return (
		<div className="grid grid-cols-4 gap-1 sm:gap-2 place-items-center">
			{games.map((game, index) => {
				return (
					<motion.div
						key={index}
						className=""
						initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
						whileInView={{ opacity: 1, scale: 1 }}
					>
						<Image
							key={index}
							width="128"
							height="128"
							src={`/covers/${game}.jpg`}
						></Image>
					</motion.div>
				);
			})}
		</div>
	);
}
