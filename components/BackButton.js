import Router from 'next/router';

export default function BackButton() {
	function goBack() {
		const page = sessionStorage.getItem('recent page') || 1;
		Router.push(`/?page=${page}`);
	}

	return (
		<div className="bg-none w-full">
			<button
				onClick={() => goBack()}
				className="sm:bg-transparent bg-white text-lg font-bold w-full text-left pl-3 py-2"
			>
				{'<'}back
			</button>
		</div>
	);
}
