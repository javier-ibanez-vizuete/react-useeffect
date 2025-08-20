import { useEffect, useState } from "react";

export const AutoRefreshingCounter = () => {
	const [time, setTime] = useState(new Date(Date.now()).toLocaleTimeString());

	useEffect(() => {
		const intervalId = setInterval(() => {
			const fullDateNow = Date.now();
			const dateNow = new Date(fullDateNow);
			const timeNow = dateNow.toLocaleTimeString();

			setTime(timeNow);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div className="auto-refreshing-counter">
			<p>{time}</p>
		</div>
	);
};
