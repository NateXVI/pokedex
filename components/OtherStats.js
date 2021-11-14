import Image from 'next/image';
import styles from '../styles/OtherStats.module.css';

export default function OtherStats({ weight, height }) {
	return (
		<div className="flex justify-evenly w-full sm:shadow-inner p-2 rounded-md">
			<Stat name="weight" icon="/icons/weight.png" value={weight} />
			<Stat name="height" icon="/icons/ruler.png" value={height} />
		</div>
	);
}

function Stat({ name, icon, value }) {
	return (
		<div className="w-14 sm:w-20">
			<div className={`${styles.container}`} data-key={name}>
				<Image
					src={icon}
					width="100"
					height="100"
					className={`w-full absolute`}
					data-key={name}
				></Image>
			</div>
			<div className="grid place-items-center">
				<p className="font-bold w-10 text-center bg-blue-500 text-white rounded-md">
					{value}
				</p>
			</div>
		</div>
	);
}
