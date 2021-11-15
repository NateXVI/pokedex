import Image from 'next/image';

export default function GameCovers({ games }) {
	return (
		<div className="grid grid-cols-4">
			{games.map((game, index) => {
				return (
					<div key={index} className="m-2 transition-shadow">
						<Image
							key={index}
							width="200"
							height="200"
							src={`/covers/${game}.jpg`}
						></Image>
					</div>
				);
			})}
		</div>
	);
}
