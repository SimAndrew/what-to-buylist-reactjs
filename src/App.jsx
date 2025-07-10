import { useState } from 'react';
import Form from './Form.jsx';

const App = () => {
	const [items, setItems] = useState([]);

	return (
		<section className="section-center">
			<Form />
		</section>
	);
};

export default App;
