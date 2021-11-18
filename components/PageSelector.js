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
			<button className="bg-blue-600 text-white h-10 w-16 rounded-r-md" onClick={goTo}>
				Go To
			</button>
		</div>
	);
}

export function PageNavigator({ path, currentPage, maxPage }) {
	function goTo(page) {
		page = Math.max(1, page);
		page = Math.min(maxPage, page);
		if (process.browser) {
			router.push(`${path}?page=${page}`);
		}
	}

	return (
		<div className="">
			<div className="flex h-10">
				{currentPage > 1 ? (
					<button
						onClick={() => goTo(Number(currentPage) - 1)}
						className={`${styles.button} rounded-l-md`}
					>{`Back`}</button>
				) : (
					<></>
				)}
				<div className="grid place-items-center h-10 bg-white">
					<p className="px-1 bg-white sm:px-4 text-center">page {currentPage}</p>
				</div>

				{currentPage < maxPage ? (
					<button
						onClick={() => goTo(Number(currentPage) + 1)}
						className={`${styles.button} rounded-r-md`}
					>{`Next`}</button>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
