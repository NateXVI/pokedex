import Types from '../../components/Types';
import BaseStats from '../../components/BaseStats';
import Head from 'next/head';
import Sprites from '../../components/Sprites';
import OtherStats from '../../components/OtherStats';
import GameCovers from '../../components/GameCovers';
import BackButton from '../../components/BackButton';

export default function pokemon({ pokemon }) {
	const spritesSrc = Object.values(pokemon.sprites).filter((value) => {
		return typeof value == 'string';
	});

	const games = pokemon.game_indices.map((value) => {
		return value.version.name;
	});

	return (
		<div className="bg-gray-300">
			<Head>
				<title>
					#{pokemon.id} - {pokemon.name}
				</title>
				<link rel="icon" href="/Ultra-Ball.ico"></link>
			</Head>
			<div className="container w-full mx-auto sm:max-w-xl pt-0 min-h-screen sm:pt-8">
				<BackButton />
				<div className="sm:bg-transparent bg-white container w-full sm:w-auto m-auto left-0 h-60 sm:h-auto ">
					<img
						className="m-auto rounded-3xl h-full object-cover sm:w-auto sm:bg-white sm:shadow-md"
						src={pokemon.image}
						alt={pokemon.name}
					/>
				</div>
				<h1 className="sm:m-0 sm:w-full text-4xl mb-2 text-center capitalize p-1">
					<span className="text-2xl text-gray-500 pr-px">
						#{pokemon.id}
					</span>
					{capitalize(pokemon.name)}
				</h1>
				<Types types={pokemon.types} />
				<div className="bg-gray-100 m-1 sm:p-2 rounded-md">
					<BaseStats stats={pokemon.stats} />
					<div className="h-1 w-full"></div>
					<OtherStats
						weight={pokemon.weight}
						height={pokemon.height}
					/>
				</div>
				<Sprites source={spritesSrc} />
				<GameCovers games={games} />
				<br />
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const id = params.id;
	let pokemon = {};
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		pokemon = await res.json();
		const paddedIndex = ('00' + id).slice(-3);
		const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
		pokemon.image = image;
	} catch (err) {
		console.error(err);
	}

	return {
		props: {
			pokemon,
		},
	};
}

export function getStaticPaths() {
	const paths = [];

	for (let i = 1; i <= 898; i++) {
		paths.push({
			params: {
				id: `${i}`,
			},
		});
	}

	return {
		paths: [],
		fallback: true,
	};
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
