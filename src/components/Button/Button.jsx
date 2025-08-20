import "./Button.css";

export const Button = ({ bodyText, className, handleButton }) => {
	const classN = `btn-exercise ${className ? className : ""}`;

	return (
		<button className={classN} onClick={handleButton}>
			{bodyText}
		</button>
	);
};
