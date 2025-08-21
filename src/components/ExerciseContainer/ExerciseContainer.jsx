import "./ExerciseContainer.css";

export const ExerciseContainer = ({ children, title }) => {
	return (
		<section className="exercise-container">
			<h2>{title}</h2>
			{children}
		</section>
	);
};
