import Image from 'next/image';

export default function GameCovers({ games }) {
	return (
		<div className="grid grid-cols-4 gap-1 sm:gap-2 place-items-center">
			{games.map((game, index) => {
				return (
					<div key={index} className="">
						<Image
							key={index}
							width="128"
							height="128"
							src={`/covers/${game}.jpg`}
						></Image>
					</div>
				);
			})}
		</div>
	);
}
