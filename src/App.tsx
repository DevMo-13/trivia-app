import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<div className='content'>
				<Header />
				<main>
					<h1>Let's play trivia!</h1>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
