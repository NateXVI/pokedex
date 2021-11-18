import Router from 'next/router';

export default function BackButton() {
	function goBack() {
		const page = sessionStorage.getItem('recent page') || 1;
		Router.push(`/?page=${page}`);
	}

	return (
		<div className="fixed sm:relative">
			<button
				onClick={() => goBack()}
				className="w-min p-1 pr-2 font-bold sm:text-lg sm:text-white sm:bg-blue-500 rounded-md"
			>
				{'<'}back
			</button>
		</div>
	);
}
