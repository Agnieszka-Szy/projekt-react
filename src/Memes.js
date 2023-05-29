import './Memes.css'
import React from 'react';

function Memes({ memes, handleUpvote, handleDownvote, isHot }) {
	return (
		<div className='regular-container p-0'>
			<section className='memes-container'>
				<div className='row justify-content-center'>
					<h2>{isHot ? 'Mocarne memy:' : 'Lista memów'}</h2>
					{memes
						.filter((meme) =>
							isHot
								? meme.likes - meme.dislikes > 5
								: meme.likes - meme.dislikes <= 5
						)
						.map((meme) => (
							<div
								className='meme-card text-center col-md-8 mt-5 mb-5'
								key={meme.id}
							>
								<h3>{meme.title}</h3>
								<img
									src={meme.imageUrl}
									className='img-fluid'
									alt={meme.title}
								/>
								<div className='card-footer'>
									<p className='likes-count'>Likes: {meme.likes}</p>
									<div className='button-group'>
										<button
											className='btn btn-primary'
											onClick={() => handleUpvote(meme.id)}
										>
											Like
										</button>
										<button
											className='btn btn-primary'
											onClick={() => handleDownvote(meme.id)}
										>
											Dislike
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
		</div>
	);
}

export default Memes;
