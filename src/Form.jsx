import { useState } from 'react';

const Form = ({ addItem }) => {
	const [newItemName, setNewItemName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItemName) return;
		addItem(newItemName);
		setNewItemName('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>What to Buy List</h4>

			<div className="form-control">
				<input
					type="text"
					className="form-input"
					value={newItemName}
					onChange={(event) => setNewItemName(event.target.value)}
				/>

				<button type="submit" className="btn">
					add item
				</button>
			</div>
		</form>
	);
};

export default Form;
