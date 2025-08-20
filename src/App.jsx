import { useState } from "react";
import "./App.css";

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

	return (
		<>
			<h1>EJERCICIOS USE EFFECT LAB</h1>
		</>
	);
};
