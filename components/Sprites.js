import Link from 'next/link';
import styles from '../styles/Sprites.module.css';

export default function Sprites({ source }) {
	return (
		<div className={styles.main}>
			{source.map((value, index) => {
				return (
					<Link key={index} href={value}>
						<a>
							<img src={value} width="100px" height="100px" />
						</a>
					</Link>
				);
			})}

			<style jsx>{`
				.main {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					width: 100%;
					place-items: center;
				}
			`}</style>
		</div>
	);
}
