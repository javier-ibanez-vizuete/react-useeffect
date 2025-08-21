import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ExerciseContainer } from "./components/ExerciseContainer/ExerciseContainer";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { AutoRefreshingCounter } from "./components/AutoRefreshingCounter/AutoRefreshingCounter";
import { ResponsiveLabel } from "./components/ResponsiveLabel/ResponsiveLabel";
import { ProductsOnMount } from "./components/ProductsOnMount/ProductsOnMount";
import { LocalProductSearch } from "./components/LocalProductSearch/LocalProductSearch";
import { CartSummary } from "./components/CartSummary/CartSummary";
import { WindowFocusStatus } from "./components/WindowFocusStatus/WindowFocusStatus";

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
	const [height, setheight] = useState(window.scrollY);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const {
		welcomeMessage,
		counterPreview,
		autoRefreshingClock,
		responsiveLabel,
		productsOnMount,
		localProductSearch,
		cartSummary,
		windowFocusStatus,
		mousePositionTracker,
		localStorageSync,
		documentTitleUpdater,
	} = shows;

	const handleButton = (exercise) => {
		setShows((prevValue) => {
			return { ...prevValue, [exercise]: !prevValue[exercise] };
		});
	};

	const handleScrollButton = () => {
		window.scrollTo({ behavior: "smooth", top: 0 });
		setheight(window.scrollY);
	};

	useEffect(() => {
		const onMouseMove = (event) => setMousePosition({ x: event.clientX, y: event.clientY });
		window.addEventListener("mousemove", onMouseMove);

		const handleScrollHeight = () => {
			const newHeight = window.scrollY;
			setheight(newHeight);
		};
		window.addEventListener("scroll", handleScrollHeight);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("scroll", handleScrollHeight);
		};
	}, []);

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

			<Button handleButton={() => handleButton("productsOnMount")}>
				{`${productsOnMount ? "Hide" : "Show"} Products on Mount`}
			</Button>
			{productsOnMount && (
				<ExerciseContainer title={"Products on Mount"}>
					<ProductsOnMount />
				</ExerciseContainer>
			)}

			<Button handleButton={() => handleButton("localProductSearch")}>
				{`${localProductSearch ? "Hide" : "Show"} Products on Mount (LOCAL PRODUCT SEARCH)`}
			</Button>
			{localProductSearch && (
				<ExerciseContainer title={"Products on Mount (LOCAL PRODUCT SEARCH)"}>
					<LocalProductSearch />
				</ExerciseContainer>
			)}

			<Button handleButton={() => handleButton("cartSummary")}>
				{`${cartSummary ? "Hide" : "Show"} Cart Summary`}
			</Button>
			{cartSummary && (
				<ExerciseContainer title={"Cart Summary"}>
					<CartSummary />
				</ExerciseContainer>
			)}

			<Button handleButton={() => handleButton("windowFocusStatus")}>
				{`${windowFocusStatus ? "Hide" : "Show"} Window Focus Status`}
			</Button>
			{windowFocusStatus && (
				<ExerciseContainer title={"Window Focus Status"}>
					<WindowFocusStatus />
				</ExerciseContainer>
			)}

			{height > 200 && (
				<Button handleButton={handleScrollButton} className={"btn-floating"}>
					Scroll To Top
				</Button>
			)}

			<Button handleButton={() => handleButton("mousePositionTracker")}>
				{`${mousePositionTracker ? "Hide" : "Show"} Mouse Position Tracker`}
			</Button>
			{mousePositionTracker && (
				<ExerciseContainer title={"Mouse Position Tracker"}>
					<p>
						Position X: <span>{mousePosition.x}</span>
					</p>
					<p>
						Position Y: <span>{mousePosition.y}</span>
					</p>
				</ExerciseContainer>
			)}
		</>
	);
};
