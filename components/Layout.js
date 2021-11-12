import Head from 'next/head';
import { Children } from 'react';

export default function Layout({ title, children }) {
	return (
		<div className="bg-gray-300">
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico"></link>
			</Head>
			<main className="container mx-auto max-w-xl pt-0 min-h-screen">{children}</main>
		</div>
	);
}
