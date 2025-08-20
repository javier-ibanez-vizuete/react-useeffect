import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ExerciseContainer } from "./components/ExerciseContainer/ExerciseContainer";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { AutoRefreshingCounter } from "./components/AutoRefreshingCounter/AutoRefreshingCounter";
import { ResponsiveLabel } from "./components/ResponsiveLabel/ResponsiveLabel";

const INITIAL_SHOWS_STATES = {
	welcomeMessage: false,
	counterPreview: false,
	autoRefreshingClock: false,
	responsiveLabel: false,
	productsOnMount: false,
	localProductSearch: false,
	cartSummary: false,
	windowFocusStatus: false,
	scrollToTopButton: false,
	mousePositionTracker: false,
	localStorageSync: false,
	documentTitleUpdater: false,
};

export const App = () => {
	const [shows, setShows] = useState(INITIAL_SHOWS_STATES);
	const {
		welcomeMessage,
		counterPreview,
		autoRefreshingClock,
		responsiveLabel,
		productsOnMount,
		localProductSearch,
		cartSummary,
		windowFocusStatus,
		scrollToTopButton,
		mousePositionTracker,
		localStorageSync,
		documentTitleUpdater,
	} = shows;

	const handleButton = (exercise) => {
		console.log("Haciendo click");
		console.log("Esto es exercise", exercise);

		setShows((prevValue) => {
			return { ...prevValue, [exercise]: !prevValue[exercise] };
		});
	};

	return (
		<>
			<h1>EJERCICIOS USE EFFECT LAB</h1>

			<Button handleButton={() => handleButton("welcomeMessage")}>
				{`${welcomeMessage ? "Hide" : "Show"} Welcome Message`}
			</Button>
			{welcomeMessage && (
				<ExerciseContainer title={"Welcome Message"}>
					<WelcomeMessage />
				</ExerciseContainer>
			)}

			<Button handleButton={() => handleButton("counterPreview")}>
				{`${counterPreview ? "Hide" : "Show"} Counter Preview`}
			</Button>
			{counterPreview && (
				<ExerciseContainer title={"Counter Preview"}>
					<CounterPreview />
				</ExerciseContainer>
			)}

			<Button handleButton={() => handleButton("autoRefreshingClock")}>
				{`${autoRefreshingClock ? "Hide" : "Show"} Auto Refreshing Clock`}
			</Button>
			{autoRefreshingClock && (
				<ExerciseContainer title={"Auto Refreshing Counter"}>
					<AutoRefreshingCounter />
				</ExerciseContainer>
			)}

			<Button handleButton={() => handleButton("responsiveLabel")}>
				{`${responsiveLabel ? "Hide" : "Show"} Responsive Label`}
			</Button>
			{responsiveLabel && (
				<ExerciseContainer title={"Responsive Label"}>
					<ResponsiveLabel />
				</ExerciseContainer>
			)}
		</>
	);
};
