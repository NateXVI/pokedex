import Link from 'next/link';

export default function Sprites({ source }) {
	return <div></div>;
}

// export default function Sprites({ source }) {
// 	return (
// 		<div className="main">
// 			{source.map((value, index) => {
// 				return (
// 					<Link key={index} href={value}>
// 						<a>
// 							<img src={value} width="100px" height="100px" />
// 						</a>
// 					</Link>
// 				);
// 			})}

// 			<style jsx>{`
// 				.main {
// 					display: grid;
// 					grid-template-columns: 1fr 1fr 1fr 1fr;
// 					width: 100%;
// 					place-items: center;
// 				}
// 			`}</style>
// 		</div>
// 	);
// }
