import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Regular from './Regular';
import Hot from './Hot';
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

	const [hotMemes, setHotMemes] = useState([]);
	const [regularMemes, setRegularMemes] = useState([]);

	useEffect(() => {
		updateMemeLists(memes);
	}, [memes]);

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

	const handleAddMeme = (newMeme) => {
		setMemes([newMeme, ...memes]);
	};

	const updateMemeLists = (updatedMemes) => {
		const hotMemes = updatedMemes.filter(
			(meme) => meme.likes - meme.dislikes > 5
		);
		const regularMemes = updatedMemes.filter(
			(meme) => meme.likes - meme.dislikes <= 5
		);
		setHotMemes(hotMemes);
		setRegularMemes(regularMemes);
	};

	return (
		<BrowserRouter>
		<div className="container px-0">

			<header>
				<h1>Nic śmiesznego...</h1>
			</header>
			<div className='content-wrapper'>
				<aside>
					<Navigation />
				</aside>
				<main>
					<Routes>
						<Route
							path='/regular'
							element={
								<Regular
									memes={regularMemes}
									handleUpvote={handleUpvote}
									handleDownvote={handleDownvote}
									handleAddMeme={handleAddMeme}
								/>
							}
						/>
						<Route
							path='/hot'
							element={
								<Hot
									memes={hotMemes}
									handleUpvote={handleUpvote}
									handleDownvote={handleDownvote}
								/>
							}
						/>
						<Route path='/' element={<Navigate to='/regular' replace />} />
					</Routes>
				</main>
			</div>

			<footer>
				<p> Copyright &copy; by ... </p>
			</footer>
		</div>
		</BrowserRouter>
	);
}



export default App;
