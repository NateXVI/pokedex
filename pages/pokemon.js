import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/pokemon.module.css';

export default function pokemon({ pokemon }) {
	console.log(pokemon);
	return (
		<div className="bg-gray-300">
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
				<p className={styles.stat}>
					<span className={styles.stat}>Weight: </span>
					{pokemon.weight}g
				</p>
				<p className={styles.stat}>
					<span className={styles.stat}>Height: </span>
					{pokemon.height}cm
				</p>
				<p className={styles.stat}>
					<span className={styles.stat}>Height: </span>
					{pokemon.height}g
				</p>
				<br />
				<ul>
					{pokemon.stats.map(({ base_stat, stat, effort }) => {
						console.log(base_stat, stat, effort);
						return (
							<li key={stat.name}>
								<h3 className="uppercase font-bold">{stat.name}</h3>
								<p className={styles.indentStat}>
									<span className={styles.stat}>Base Stat: </span>
									{base_stat}
								</p>
								<p className={styles.indentStat}>
									<span className={styles.stat}>Effort: </span>
									{effort}
								</p>
								<br />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const id = query.id;
	let pokemon = {};
	try {
		console.log(id);
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
