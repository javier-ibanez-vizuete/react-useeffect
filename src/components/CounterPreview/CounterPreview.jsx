import { useEffect, useState } from "react";

export const CounterPreview = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((prevValue) => prevValue + 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="counter-preview">
			<p>Current Count: {count}</p>
		</div>
	);
};

// NO ESTOY SEGURO DE SI ESTOY ES LO QUE SE PEDIA... O QUIZAS HACER EL CAMBIO DEL CONTADOR A TRAVES DE UN BUTTON
