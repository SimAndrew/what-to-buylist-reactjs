import SingleItem from './SingleItem.jsx';

const Items = ({ items, removeItem, editItem }) => {
	return (
		<div className="items">
			{items.map((item) => {
				return (
					<SingleItem
						key={item.id}
						item={item}
						removeItem={removeItem}
						editItem={editItem}
					/>
				);
			})}
		</div>
	);
};

export default Items;
