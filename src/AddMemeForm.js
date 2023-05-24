import React, { useState } from 'react';

function AddMemeForm({ handleAddMeme }) {
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (title && imageUrl) {
			const newMeme = {
				id: Date.now(),
				title,
				imageUrl,
				likes: 0,
				dislikes: 0,
			};
			handleAddMeme(newMeme);
			setTitle('');
			setImageUrl('');
		}
	};

	return (
		<div className='modal-body p-5'>
			<h2>Dodaj mema</h2>

			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type='text'
						className='form-control rounded-3'
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</label>
				<br />
				<label>
					Image URL:
					<input
						type='text'
						className='form-control rounded-3'
						value={imageUrl}
						onChange={(event) => setImageUrl(event.target.value)}
					/>
				</label>
				<br />
				<button className=' btn btn-primary mt-3' type='submit'>
					Add Meme
				</button>
			</form>
		</div>
	);
}

export default AddMemeForm;
