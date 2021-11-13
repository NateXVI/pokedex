import styles from '../styles/BaseStats.module.css';

export default function BaseStats({ stats }) {
	// return (
	// 	<div className="bg-gray-100 p-2 rounded-md sm:shadow-inner">
	// 		<div className={`${styles.main}`}>
	// 			{stats.map((stat) => {
	// 				const name = stat.stat.name;
	// 				const base_stat = stat.base_stat;
	// 				const percent = (base_stat / 150) * 100;
	// 				let color;
	// 				switch (name) {
	// 					case 'special-attack':
	// 					case 'special-defense':
	// 						return <></>;
	// 						break;
	// 					case 'hp':
	// 						color = 'bg-green-500';
	// 						break;
	// 					case 'attack':
	// 						color = 'bg-red-500';
	// 						break;
	// 					case 'defense':
	// 						color = 'bg-blue-500';
	// 						break;
	// 					case 'speed':
	// 						color = 'bg-yellow-500';
	// 				}
	// 				return (
	// 					<>
	// 						<p className="w-min px-2 py-1">{name}</p>
	// 						<p className="w-min px-2 py-1 text-right">{base_stat}</p>
	// 						<div className="container flex justify-end">
	// 							<div className="container max-w-sm bg-white border-2 border-black rounded-full overflow-hidden">
	// 								<div
	// 									className={`progress h-2 bg-red-500 ${color} self-center`}
	// 									style={{ width: `${percent}%` }}
	// 								></div>
	// 							</div>
	// 						</div>
	// 					</>
	// 				);
	// 			})}
	// 			{stats.map((stat) => {
	// 				const name = stat.stat.name;
	// 				const base_stat = stat.base_stat;
	// 				const percent = (base_stat / 150) * 100;
	// 				let color;
	// 				switch (name) {
	// 					case 'special-attack':
	// 					case 'special-defense':
	// 						return <></>;
	// 						break;
	// 					case 'hp':
	// 						color = 'bg-green-500';
	// 						break;
	// 					case 'attack':
	// 						color = 'bg-red-500';
	// 						break;
	// 					case 'defense':
	// 						color = 'bg-blue-500';
	// 						break;
	// 					case 'speed':
	// 						color = 'bg-yellow-500';
	// 				}
	// 				return (
	// 					<>
	// 						<p key={name} className="w-min px-2 py-1">
	// 							{name}
	// 						</p>
	// 					</>
	// 				);
	// 			})}
	// 		</div>
	// 	</div>
	// );
	return <div></div>;
}
