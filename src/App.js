import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Memes from './Memes';
import AddMemeForm from './AddMemeForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [memes, setMemes] = useState([
		{
			id: 1,
			title: 'Produkcja',
			imageUrl: 'images/mem1.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 2,
			title: 'Miłość',
			imageUrl: 'images/mem2.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 3,
			title: 'Pieskie życie',
			imageUrl: 'images/mem3.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 4,
			title: 'Wszystko jasne',
			imageUrl: 'images/mem4.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 5,
			title: 'Jedno piwo',
			imageUrl: 'images/mem5.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 6,
			title: 'Zmęczenie materiału',
			imageUrl: 'images/mem6.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 7,
			title: 'Weteran',
			imageUrl: 'images/mem7.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 8,
			title: 'Luz',
			imageUrl: 'images/mem8.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 9,
			title: 'Profeska',
			imageUrl: 'images/mem9.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 10,
			title: "That's the future",
			imageUrl: 'images/mem10.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 11,
			title: 'Natural abilities',
			imageUrl: 'images/mem11.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 12,
			title: 'Problems everywhere',
			imageUrl: 'images/mem12.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 13,
			title: 'Love my job',
			imageUrl: 'images/mem13.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 14,
			title: 'Framework',
			imageUrl: 'images/mem14.jpg',
			likes: 0,
			dislikes: 0,
		},
		{
			id: 15,
			title: 'Ciężka robota',
			imageUrl: 'images/mem15.jpg',
			likes: 0,
			dislikes: 0,
		},
	]);

	const handleAddMeme = (newMeme) => {
		setMemes([newMeme, ...memes]);
	};
	const handleUpvote = (id) => {
		const updatedMemes = memes.map((meme) => {
			if (meme.id === id) {
				return {
					...meme,
					likes: meme.likes + 1,
				};
			} else {
				return meme;
			}
		});
		setMemes(updatedMemes);
	};

	const handleDownvote = (id) => {
		const updatedMemes = memes.map((meme) => {
			if (meme.id === id && meme.likes > 0) {
				return {
					...meme,
					likes: meme.likes - 1,
				};
			} else {
				return meme;
			}
		});
		setMemes(updatedMemes);
	};

	return (
		<BrowserRouter>
			<div className='container px-0'>
				<header>
					<h1>Nic śmiesznego...</h1>
				</header>
				<div className='content-wrapper'>
					<aside>
						<Navigation />
					</aside>
					<main>
						<Routes>
							<Route path='/' element={<Navigate to='/regular' replace />} />
							<Route
								path='/regular'
								element={
									<div className='regular-container p-0'>
										<section className='memes-container'>
											<div className='row justify-content-center'>
												<AddMemeForm handleAddMeme={handleAddMeme} />
												<Memes
													memes={memes}
													handleUpvote={handleUpvote}
													handleDownvote={handleDownvote}
													isHot={false}
												/>
											</div>
										</section>
									</div>
								}
							/>
							<Route
								path='/hot'
								element={
									<Memes
										memes={memes}
										handleUpvote={handleUpvote}
										handleDownvote={handleDownvote}
										isHot={true}
									/>
								}
							/>
						</Routes>
					</main>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
