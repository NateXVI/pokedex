import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/pokemon.module.css';
import Types from '../components/Types';
import BaseStats from '../components/BaseStats';
import Head from 'next/head';
import Sprites from '../components/Sprites';

export default function pokemon({ pokemon }) {
	const sprites = Object.values(pokemon.sprites).filter((value) => {
		return typeof value == 'string';
	});
	console.log(pokemon, sprites);

	return (
		<div className="bg-gray-300">
			<Head>
				<title>
					#{pokemon.id} - {pokemon.name}
				</title>
			</Head>
			<div className="container w-full mx-auto sm:max-w-xl pt-0 min-h-screen sm:pt-8">
				<div className="sm:bg-transparent bg-white container w-full sm:w-auto m-auto left-0 h-60 sm:h-auto ">
					<img
						className="m-auto rounded-3xl h-full object-cover sm:w-auto sm:bg-white sm:shadow-md"
						src={pokemon.image}
						alt={pokemon.name}
					/>
				</div>
				<h1 className="sm:m-0 sm:w-full text-4xl mb-2 text-center capitalize p-1">
					{pokemon.name}
				</h1>
				<Types types={pokemon.types} />
				<div className="bg-gray-100 m-1 sm:p-2 rounded-md">
					<BaseStats stats={pokemon.stats} />
					<br />
					<div className="sm:px-4 px-2 pb-2 sm:shadow-inner rounded-md">
						<p className={styles.stat}>
							<span className={styles.stat}>Weight: </span>
							{pokemon.weight}
						</p>
						<p className={styles.stat}>
							<span className={styles.stat}>Height: </span>
							{pokemon.height}
						</p>
					</div>
				</div>
				<Sprites sprites={sprites} />

				<br />
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const id = query.id;
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
