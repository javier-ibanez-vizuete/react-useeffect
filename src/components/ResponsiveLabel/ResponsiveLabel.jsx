import { useEffect, useState } from "react";

export const ResponsiveLabel = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleResize = () => {
		const newWidth = window.innerWidth;
		setWidth(newWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="responsive-label">
			<h4>{width < 768 ? "Mobile layout" : "Desktop layout"}</h4>
		</div>
	);
};
