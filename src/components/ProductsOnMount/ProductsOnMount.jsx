import { useEffect, useState } from "react";

export const ProductsOnMount = () => {
	const [items, setItems] = useState(null);
	const [errorFetch, setErrorFetch] = useState(false);

	const handleFetch = async () => {
		try {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			console.log(data);

			setItems(data);
		} catch (error) {
			console.error(error);
			setErrorFetch(true);
			console.log("He pasado por aqui");
		}
	};

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<div className="products-on-mount">
			{!items && !errorFetch && <h3>Loading...</h3>}
			{items?.length > 0 && (
				<ul>
					{items.map((item) => {
						return <li key={item.id}>{item.title} - {item.price}€</li>;
					})}
				</ul>
			)}
			{errorFetch && <h3>Algo ha ido muy mal</h3>}
		</div>
	);
};
