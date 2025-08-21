import "./Button.css";

export const Button = ({ children, className, handleButton }) => {
	const classN = `btn-exercise ${className ? className : ""}`;

	return (
		<button className={classN} onClick={handleButton}>
			{children}
		</button>
	);
};
