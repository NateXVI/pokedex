import Link from 'next/link';
import styles from '../styles/PageSelector.module.css';
import router from 'next/router';
import { useState } from 'react';

export default function PageSelector({ path, maxPage, currentPage }) {
	const [pageInput, setPageInput] = useState(currentPage);

	function goTo() {
		if (pageInput != currentPage) {
			router.push(`${path}?page=${pageInput}`);
		}
	}

	function setInput(value) {
		value = Math.min(value, maxPage);
		value = Math.max(1, value);

		setPageInput(value);
	}

	function keyPressed(e) {
		if (e.key == 'Enter') {
			goTo();
		}
	}

	return (
		<div className="mx-1 flex-none h-8 sm:h-10">
			<input
				type="number"
				min="1"
				max={maxPage}
				value={pageInput}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => keyPressed(e)}
				className="h-full px-2 sm:px-4 rounded-l-md"
			/>
			<button className="bg-blue-600 text-white h-full w-8 rounded-r-md" onClick={goTo}>
				Go
			</button>
		</div>
	);
}

export function PageNavigator({ path, currentPage, maxPage }) {
	function goTo(page) {
		page = Math.max(1, page);
		page = Math.min(maxPage, page);
		if (process.browser && page != currentPage) {
			router.push(`${path}?page=${page}`);
		}
	}

	return (
		<div className="">
			<div className="flex h-8 sm:h-10">
				<button
					onClick={() => goTo(Number(currentPage) - 1)}
					className={`${styles.button} rounded-l-md h-full`}
				>{`Back`}</button>

				<div className="grid place-items-center h-full bg-white">
					<p className="px-1 bg-white sm:px-4 text-center">
						<span className="hidden sm:inline">page</span> {currentPage}
					</p>
				</div>

				<button
					onClick={() => goTo(Number(currentPage) + 1)}
					className={`${styles.button} rounded-r-md h-full`}
				>{`Next`}</button>
			</div>
		</div>
	);
}
