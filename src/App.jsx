import { useState } from 'react';
import Form from './Form.jsx';
import { nanoid } from 'nanoid';
import Items from './Items.jsx';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
	localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
	const [items, setItems] = useState(defaultList);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setLocalStorage(newItems);

		toast.success('Item Added successfully!');
	};

	const removeItem = (itemId) => {
		const newItems = items.filter((item) => item.id !== itemId);
		setItems(newItems);
		setLocalStorage(newItems);

		toast.success('Item Removed successfully!');
	};

	const editItem = (itemId) => {
		const newItems = items.map((item) => {
			if (item.id === itemId) {
				const newItem = { ...item, completed: !item.completed };
				return newItem;
			}
			return item;
		});
		setItems(newItems);
		setLocalStorage(newItems);

		toast.success(
			`Item ${newItems.find((item) => item.id === itemId).completed ? 'Completed' : 'Uncompleted'} successfully!`,
		);
	};

	return (
		<section className="section-center">
			<ToastContainer position="top-center" />

			<Form addItem={addItem} />
			<Items items={items} removeItem={removeItem} editItem={editItem} />
		</section>
	);
};

export default App;
