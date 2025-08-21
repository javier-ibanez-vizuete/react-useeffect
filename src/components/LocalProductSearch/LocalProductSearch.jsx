import { useEffect, useState } from "react";

export const LocalProductSearch = () => {
	const [items, setItems] = useState(null);
	const [localItems, setLocalItems] = useState(items);
	const [errorFetch, setErrorFetch] = useState(false);
	const [error, setError] = useState("");
	const [inputValue, setInputValue] = useState("");

	const handleFetch = async () => {
		try {
			const response = await fetch("https://fakestoreapri.com/products");
			const data = await response.json();
			console.log(data);

			setItems(data);
			setLocalItems(data);
		} catch (error) {
			console.error(error);
			setErrorFetch(true);
			console.log("He pasado por aqui");
		}
	};

	useEffect(() => {
		handleFetch();
	}, []);

	useEffect(() => {
		if (inputValue.length < 2) {
			setLocalItems(items);
			return;
		}

		const filteredItems = items.filter(({ title }) => {
			const titleLower = title.toLowerCase();
			const inputValueLower = inputValue.toLowerCase();
			return titleLower.includes(inputValueLower);
		});
		if (!filteredItems.length) {
			setLocalItems([]);
			return setError("No hay coincidencias en su busqueda");
		}

		setLocalItems([...filteredItems]);
	}, [inputValue]);

	const handleInputChange = (event) => {
		const { value } = event.target;

		setError("");
		setInputValue(value);
	};

	return (
		<>
			{items && !errorFetch && (
				<input
					type="search"
					name="itemName"
					id="itemName"
					minLength={2}
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Introduce un titulo"
				/>
			)}
			{error && <p className="error-text">{error}</p>}
			{!items && !errorFetch && <h3>Loading...</h3>}
			{localItems &&
				localItems.map((item) => {
					return (
						<li key={item.id}>
							{item.title} - {item.price}
						</li>
					);
				})}

			{errorFetch && <h3>Algo ha ido muy mal</h3>}
		</>
	);
};
