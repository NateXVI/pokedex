import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import PageSelector from '../components/PageSelector';

const itemsPerPage = 20;
const totalItems = 898;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export default function Home({ pokemon, page, offset }) {
	return (
		<Layout title="Pokedex">
			<h1 className="text-4xl mb-8 text-center pt-20 pb-16">Next.js Pokedex</h1>
			<PageSelector path="/" currentPage={page} maxPage={totalPages}></PageSelector>
			<ul>
				{pokemon.map((pokemon, index) => {
					if (index + offset >= totalItems) return;
					return (
						<li key={index}>
							<Link href={{ pathname: '/pokemon', query: { id: index + 1 + offset } }}>
								<a className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md">
									<img
										className="w-20 h-20 mr-3"
										src={pokemon.image}
										alt={pokemon.name}
									/>
									<span className="mr-2 font-bold">{index + 1 + offset}.</span>
									{pokemon.name}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
			<PageSelector path="/" currentPage={page} maxPage={totalPages}></PageSelector>
			<footer className="w-full h-20"></footer>
		</Layout>
	);
}

export async function getServerSideProps({ query }) {
	let page = query.page || 1;
	let offset = (page - 1) * itemsPerPage;
	let pokemon = {};
	try {
		const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
		);
		const { results } = await res.json();
		pokemon = results.map((result, index) => {
			const paddedIndex = ('00' + (index + 1 + offset)).slice(-3);
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
			page,
			offset,
		},
	};
}
