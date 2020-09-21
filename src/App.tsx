import React from 'react';
import Header from './components/Header';

function App() {
	return (
		<>
			<div className='content'>
				<Header />
				<main>
					<h1>Let's play trivia!</h1>
				</main>
				<footer>Sticky Footer</footer>
			</div>
		</>
	);
}

export default App;
