import { Fragment } from 'react';
import useSWR from 'swr';
import BaseStats, { StatsBar } from './BaseStats';
import Link from 'next/link';

export default function PokemonList({ pokemon, offset }) {
	console.log(pokemon);
	return (
		<Fragment>
			{pokemon.map((value, index) => {
				return (
					<PokemonThumbnail pokemon={value} index={index + 1 + offset} key={index} />
				);
			})}
		</Fragment>
	);
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PokemonThumbnail({ pokemon, index }) {
	const { data, error } = useSWR(pokemon.url, fetcher);
	setTimeout(() => {
		console.log(data);
	}, 1000);
	return (
		<div className="container">
			<Link href={{ pathname: '/pokemon', query: { id: index } }}>
				<a>
					<div className="m-2 bg-white p-4 rounded-md flex">
						<div className="w-52">
							<img src={pokemon.image} className="h-20 w-20 sm:h-28 sm:w-28" />
							<p className="capitalize">
								<span className="text-sm text-gray-500 pr-px">#{index}</span>
								<span className="capitalize font-bold text-lg">
									{capitalize(pokemon.name)}
								</span>
							</p>
						</div>
						<div className="container">
							{!!data ? (
								<div className="">
									{data.stats.map((stat, index) => {
										const name = stat.stat.name;
										const base_stat = stat.base_stat;
										const percent = (base_stat / 150) * 100;
										let color;
										switch (name) {
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
												break;
											default:
												return;
												break;
										}
										return (
											<div key={index} className="m-1">
												<StatsBar color={color} percent={percent} />
											</div>
										);
									})}
								</div>
							) : (
								<Fragment></Fragment>
							)}
							{!!!data ? (
								<div>
									<div key={index} className="m-1">
										<RandomStatBar color="bg-green-500" />
									</div>
									<div key={index} className="m-1">
										<RandomStatBar color="bg-red-500" />
									</div>
									<div key={index} className="m-1">
										<RandomStatBar color="bg-blue-500" />
									</div>
									<div key={index} className="m-1">
										<RandomStatBar color="bg-yellow-500" />
									</div>
								</div>
							) : (
								<Fragment></Fragment>
							)}
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}

function RandomStatBar({ color }) {
	const percent = Math.random() * 75;

	return <StatsBar color={color} percent={percent}></StatsBar>;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
