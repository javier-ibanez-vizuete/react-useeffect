import { useEffect, useState } from "react";

export const WelcomeMessage = () => {
	const [showTime, setShowTime] = useState(null);

	useEffect(() => {
		const now = Date.now();
		const time = new Date(now);
		const date = time.toLocaleString();
		setShowTime(date);
	}, []);

	return (
		<div className="welcome-message-container">
			<h3>Bienvenido</h3>
			{showTime && <span>{showTime}</span>}
		</div>
	);
};
