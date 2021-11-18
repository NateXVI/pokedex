import Link from 'next/link';
import styles from '../styles/PageSelector.module.css';
import router from 'next/router';
import { useState } from 'react';

export default function PageSelector({ path, maxPage, currentPage }) {
	const [pageInput, setPageInput] = useState(currentPage);

	function goTo(event) {
		console.log(pageInput);

		if (pageInput != currentPage) {
			router.push(`${path}?page=${pageInput}`);
		}
	}

	function setInput(value) {
		value = Math.min(value, maxPage);
		value = Math.max(1, value);

		setPageInput(value);
	}

	return (
		<div className="mx-1 flex-none">
			<input
				type="number"
				min="1"
				max={maxPage}
				value={pageInput}
				onChange={(e) => setInput(e.target.value)}
				className="h-10 px-2 sm:px-4 rounded-l-md"
			/>
			<button
				className="bg-blue-600 text-white h-10 w-16 rounded-r-md"
				onClick={goTo}
			>
				Go To
			</button>
		</div>
	);
}

export function PageNavigator({ path, currentPage, maxPage }) {
	return (
		<div className="w-full">
			<div className="flex m-auto sm:m-0">
				{currentPage > 1 ? (
					<Link
						href={{
							pathname: path,
							query: { page: currentPage - 1 },
						}}
					>
						<a className={styles.button}>{`Back`}</a>
					</Link>
				) : (
					<></>
				)}

				<p className="text-blue-700 m-1 p-0.5 pl-1 pr-1 font-semibold bg-white">
					page {currentPage}
				</p>

				{currentPage < maxPage ? (
					<Link
						href={{
							pathname: path,
							query: { page: Number(currentPage) + 1 },
						}}
					>
						<a className={styles.button}>{`Next`}</a>
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
