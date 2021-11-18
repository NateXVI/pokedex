import Router from 'next/router';

export default function BackButton() {
	function goBack() {
		console.log(sessionStorage.getItem('recent page'));
		const page = sessionStorage.getItem('recent page') || 1;
		Router.push(`/?page=${page}`);
	}

	return (
		<div className="bg-none">
			<button
				onClick={() => goBack()}
				className="sm:bg-transparent bg-white text-lg font-bold "
			>
				{'<'}back
			</button>
		</div>
	);
}
