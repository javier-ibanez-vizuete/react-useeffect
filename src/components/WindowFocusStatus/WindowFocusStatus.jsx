import { useEffect, useState } from "react";
import "./WindowFocusStatus.css";

export const WindowFocusStatus = () => {
	const [focus, setFocus] = useState(true);

	useEffect(() => {
		const handleFocusState = () => setFocus((prevFocus) => !prevFocus);
		const handleBlurState = () => setFocus((prevFocus) => !prevFocus);
		window.addEventListener("focus", handleFocusState);
		window.addEventListener("blur", handleBlurState);

		return () => {
			window.removeEventListener("focus", handleFocusState);
			window.removeEventListener("blur", handleBlurState);
		};
	}, []);

	return (
		<div className={`window-focus-container ${focus ? "focus-active" : ""}`}>
			<h2>{focus ? "APP IS ACTIVE" : "APP IS INACTIVE"}</h2>
		</div>
	);
};
