import { Fragment } from 'react';
import useSWR from 'swr';
import BaseStats, { StatsBar } from './BaseStats';
import Link from 'next/link';
import Image from 'next/image';
import Types from './Types';
import { motion, AnimatePresence } from 'framer-motion';

export default function PokemonList({ pokemon, offset }) {
	return (
		<Fragment>
			{pokemon.map((value, index) => {
				const pokemonIndex = index + 1 + offset;
				if (pokemonIndex > 898) return;
				return (
					<PokemonThumbnail pokemon={value} index={pokemonIndex} key={index} />
				);
			})}
		</Fragment>
	);
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PokemonThumbnail({ pokemon }) {
	const { data, error } = useSWR(pokemon.url, fetcher);

	const variants = {
		initial: {
			scale: 1,
			opacity: 1,
		},
		move: {
			opacity: 0,
			scale: [0.9, 0.9, 1.05, 1],
		},
		exit: {
			scale: 0.9,
		},
		hover: {},
		visible: {
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="container"
			initial="initial"
			animate="move"
			exit="exit"
			whileHover="hover"
			whileInView="visible"
			variants={variants}
			key={pokemon.name}
		>
			<Link href={{ pathname: `/p/${data?.id}` }}>
				<a>
					<div className="m-2 bg-gray-200 p-4 rounded-md flex shadow-2xl">
						<div className="w-52">
							<img
								src={pokemon.image}
								className="h-20 w-20 sm:h-28 sm:w-28"
							/>
							<div className="pt-4">
								<p className="capitalize">
									<span className="text-sm text-gray-500 pr-px">
										#{data?.id}
									</span>
									<span className="capitalize font-bold text-lg">
										{capitalize(pokemon.name)}
									</span>
								</p>
							</div>
						</div>
						<div className="container">
							{!!data ? (
								<div className="sm:pt-4">
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
											<div key={index} className="m-2">
												<StatsBar
													color={color}
													percent={percent}
												/>
											</div>
										);
									})}
									<div className="h-full w-full grid grid-cols-3 mt-3 sm:pt-3.5 place-items-center">
										<Stat
											icon="/icons/weight.png"
											value={data.weight}
										/>
										<Stat
											icon="/icons/ruler.png"
											value={data.height}
										/>
										<Types types={data.types} />
									</div>
								</div>
							) : (
								<Fragment></Fragment>
							)}
							{!!!data ? (
								<div className="sm:pt-4">
									<div className="m-2">
										<RandomStatBar color="bg-green-500" />
									</div>
									<div className="m-2">
										<RandomStatBar color="bg-red-500" />
									</div>
									<div className="m-2">
										<RandomStatBar color="bg-blue-500" />
									</div>
									<div className="m-2">
										<RandomStatBar color="bg-yellow-500" />
									</div>
									<div className="h-full w-full grid grid-cols-3 mt-3 sm:pt-3.5 place-items-center">
										<Stat icon="/icons/weight.png" value="0" />
										<Stat icon="/icons/ruler.png" value="0" />
										<Types
											types={[
												{ type: { name: 'normal' }, slot: 1 },
											]}
										/>
									</div>
								</div>
							) : (
								<Fragment></Fragment>
							)}
						</div>
					</div>
				</a>
			</Link>
		</motion.div>
	);
}

function RandomStatBar({ color }) {
	const percent = Math.round(Math.random() * 75);

	return <StatsBar color={color} percent={percent}></StatsBar>;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function Stat({ icon, value }) {
	return (
		<div className="flex items-center h-1/2">
			<div className="">
				<Image src={icon} width="25" height="25" className=""></Image>
			</div>
			<div className="">
				<p className="">{value}</p>
			</div>
		</div>
	);
}
