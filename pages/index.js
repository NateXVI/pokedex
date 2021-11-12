import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home({ pokemon }) {
	return (
		<Layout title="Pokedex">
			<h1 className="text-4xl mb-8 text-center pt-20 pb-16">Next.js Pokedex</h1>
			<ul>
				{pokemon.map((pokemon, index) => {
					return (
						<li key={index}>
							<Link href={{ pathname: '/pokemon', query: { id: index + 1 } }}>
								<a className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md">
									<img
										className="w-20 h-20 mr-3"
										src={pokemon.image}
										alt={pokemon.name}
									/>
									<span className="mr-2 font-bold">{index + 1}.</span>
									{pokemon.name}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export async function getStaticProps(context) {
	let pokemon = {};
	try {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
		const { results } = await res.json();
		pokemon = results.map((result, index) => {
			const paddedIndex = ('00' + (index + 1)).slice(-3);
			const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
			return {
				...result,
				image,
			};
		});
	} catch (err) {
		console.error(err);
	}

	return {
		props: {
			pokemon,
		},
	};
}
