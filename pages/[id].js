import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import PageSelector, { PageNavigator } from '../components/PageSelector';
import PokemonList from '../components/PokemonList';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const itemsPerPage = 10;
const totalItems = 898;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export default function Home({ pokemon, page, offset }) {
	useEffect(() => {
		sessionStorage.setItem('recent page', page);
	});

	return (
		<AnimatePresence exitBeforeEnter>
			<Layout title="Pokedex">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<h1 className="text-4xl mb-8 text-center pt-20 pb-16">
						Next.js Pokedex
					</h1>
					<div className="flex justify-between p-2 sm:p-1 items-center">
						<PageNavigator path="/" currentPage={page} maxPage={totalPages} />
						<PageSelector path="/" maxPage={totalPages} currentPage={page} />
					</div>
					<AnimatePresence>
						<motion.div
							className="container grid grid-cols-1 md:grid-cols-2"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 1, y: 10 }}
							key={page}
						>
							{pokemon ? (
								<PokemonList pokemon={pokemon} offset={offset} />
							) : (
								<></>
							)}
						</motion.div>
					</AnimatePresence>
					<div className="flex w-full justify-center">
						<PageNavigator path="/" currentPage={page} maxPage={totalPages} />
					</div>
					<footer className="w-full h-20"></footer>
				</motion.div>
			</Layout>
		</AnimatePresence>
	);
}

export async function getStaticProps({ params }) {
	let page = params.id || 1;
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

export function getStaticPaths() {
	const paths = [];

	for (let i = 1; i <= totalPages; i++) {
		paths.push({
			params: {
				id: `${i}`,
			},
		});
	}

	return {
		paths,
		fallback: false,
	};
}
