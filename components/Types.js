import Image from 'next/image';
import styles from '../styles/Types.module.css';

export default function Types({ types }) {
	console.log(types);
	types = types.map((v) => {
		return {
			name: v.type.name,
			slot: v.slot,
		};
	});
	return (
		<div className="container m-auto flex justify-center">
			{types.map((type) => {
				return (
					<div
						key={type.name}
						data-key={type.name}
						className={`p-1 flex-col justify-center items-center relative ${styles.container}`}
					>
						<Image
							src={`/types/${type.name}.svg`}
							width="30"
							height="30"
							className="block self-center"
							alt={type.name}
						></Image>
					</div>
				);
			})}
		</div>
	);
}
