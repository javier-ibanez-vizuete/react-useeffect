import { useEffect, useState } from "react";
import { getDataFromStorage, saveDataInStorage } from "../../helpers/localStorage";

export const LocalStorageSync = () => {
	const [inputValue, setInputValue] = useState("");
	const [wordToDisplay, setWordToDisplay] = useState(() => {
		const wordFromStorage = getDataFromStorage("word_to_display");
		if (wordFromStorage) {
			return wordFromStorage;
		}
		return inputValue;
	});

	useEffect(() => {
		if (inputValue.length === 0)
			return setWordToDisplay(() => {
				const wordFromStorage = getDataFromStorage("word_to_display");
				if (wordFromStorage) {
					return wordFromStorage;
				}
				return inputValue;
			});
		if (inputValue.length !== 0) return setWordToDisplay(inputValue);
	}, [inputValue]);

	const onInputChange = (event) => {
		const { value } = event.target;

		setInputValue(value);
		saveDataInStorage("word_to_display", value);
	};

	return (
		<div className="local-storage-container">
			<input
				type="text"
				name="inputText"
				id="inputText"
				value={wordToDisplay.length ? wordToDisplay : inputValue}
				placeholder="Introduce una frase"
				onChange={onInputChange}
			/>
			<h2>{wordToDisplay}</h2>
		</div>
	);
};
