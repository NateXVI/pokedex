import styles from '../styles/BaseStats.module.css';
import { Fragment } from 'react';

export default function BaseStats({ stats }) {
	return (
		<div className="bg-gray-100 p-2 rounded-md sm:shadow-inner">
			<div className={`${styles.main}`}>
				{stats.map((stat, index) => {
					const name = stat.stat.name;
					const base_stat = stat.base_stat;
					const percent = (base_stat / 150) * 100;
					let color;
					switch (name) {
						case 'special-attack':
						case 'special-defense':
							return;
							break;
						case 'hp':
							color = 'bg-green-500';
							break;
						case 'attack':
							color = 'bg-red-500';
							break;
						case 'defense':
							color = 'bg-blue-500';
							break;
						case 'speed':
							color = 'bg-yellow-500';
					}
					return (
						<Fragment key={name}>
							<p key={`name-${index}`} className="w-min px-2 py-1">
								{name}
							</p>
							<p key={`stat-${index}`} className="w-min px-2 py-1 text-right">
								{base_stat}
							</p>
							<div key={`bar-${index}`} className="container flex justify-end">
								<div className="container max-w-sm bg-white border-2 border-black rounded-full overflow-hidden">
									<div
										className={`progress h-2 bg-red-500 ${color} self-center`}
										style={{ width: `${percent}%` }}
									></div>
								</div>
							</div>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
