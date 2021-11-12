import Link from 'next/link';
import styles from '../styles/PageSelector.module.css';

// export default function PageSelector({ path, currentPage, maxPage }) {
// 	return (
// 		<div className="m-1 mb-3">
// 			<p className={`${styles.text} `}>
// 				{currentPage > 1 ? (
// 					<Link href={{ pathname: path, query: { page: currentPage - 1 } }}>
// 						<a className={styles.button}>{`${currentPage - 1} Back`}</a>
// 					</Link>
// 				) : (
// 					<></>
// 				)}
// 				<span className={styles.text}>{currentPage}</span>
// 				{currentPage < maxPage ? (
// 					<Link href={{ pathname: path, query: { page: Number(currentPage) + 1 } }}>
// 						<a className={styles.button}>{`Next ${Number(currentPage) + 1}`}</a>
// 					</Link>
// 				) : (
// 					<></>
// 				)}
// 			</p>
// 		</div>
// 	);
// }
export default function PageSelector({ path, currentPage, maxPage }) {
	return (
		<div className="w-full">
			<div className="container w-full flex items-center justify-center m-auto sm:m-0">
				{currentPage > 1 ? (
					<Link href={{ pathname: path, query: { page: currentPage - 1 } }}>
						<a className={styles.button}>{`Back`}</a>
					</Link>
				) : (
					<></>
				)}

				<p className="text-blue-700 m-1 p-0.5 pl-1 pr-1 font-semibold bg-white">
					page {currentPage}
				</p>

				{currentPage < maxPage ? (
					<Link href={{ pathname: path, query: { page: Number(currentPage) + 1 } }}>
						<a className={styles.button}>{`Next`}</a>
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
