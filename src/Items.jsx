import SingleItem from './SingleItem.jsx';

const Items = ({ items, removeItem }) => {
	return (
		<div className="items">
			{items.map((item) => {
				return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
			})}
		</div>
	);
};

export default Items;
