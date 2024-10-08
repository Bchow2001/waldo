import "./Menu.css";

import { useState } from "react";

function Menu({ guess, guessed, addGuessed, handleClose }) {
	const [selectedChar, setSelectedChar] = useState();

	function onRadioChange(e) {
		setSelectedChar(e.target.value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (selectedChar != null) {
			const requestOptions = {
				method: "POST",
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				mode: "cors",
				body: JSON.stringify({
					guess: guess,
					selectedChar: selectedChar,
				}),
			};
			try {
				let response = await fetch(
					`http://localhost:3000`,
					requestOptions,
				);
				if (response.status === 200) {
					response = await response.json();
					if (response.selectedChar === null) {
						handleClose();
						return;
					}
					addGuessed({
						character: selectedChar,
						x: guess.x,
						y: guess.y,
					});
					handleClose();
				} else {
					response = await response.json();
					handleClose();
				}
			} catch (e) {
				console.log(e);
			}
		}
	};

	const characters = [
		{ name: "Bryan", id: "bryan" },
		{ name: "Dave", id: "dave" },
		{ name: "George", id: "george" },
		{ name: "Hat man", id: "hatman" },
		{ name: "HULK", id: "hulk" },
		{ name: "Lara", id: "lara" },
		{ name: "Ryan", id: "ryan" },
		{ name: "Twin One", id: "twinOne" },
		{ name: "Twin Two", id: "twinTwo" },
		{ name: "Unfortunate Man", id: "unfortunate" },
	];

	function RadioItem({ character }) {
		return (
			<div className="form-group">
				<input
					type="radio"
					name="character"
					id={character.id}
					value={character.id}
					checked={selectedChar === character.id}
					onChange={onRadioChange}
				/>
				<label htmlFor={character.id}>{character.name}</label>
			</div>
		);
	}

	function RadioList({ characters, guessed }) {
		return (
			<>
				{characters
					.filter(
						(character) =>
							!guessed.some((e) => e.character === character.id),
					)
					.map((character) => {
						return (
							<RadioItem
								key={character.id}
								character={character}
							/>
						);
					})}
			</>
		);
	}

	let x = guess.x;
	let y = guess.y;
	if (guess.y > 760) {
		y = y - 320;
	}

	return (
		<div
			className="menu-wrapper"
			style={{
				top: `${y}px`,
				left: `${x}px`,
				position: "absolute",
				color: "black",
				backgroundColor: "white",
				zIndex: 2,
			}}
		>
			<button onClick={() => handleClose()}>X</button>
			<form className="menu-form" action="">
				<RadioList characters={characters} guessed={guessed} />
				<button type="submit" onClick={handleSubmit}>
					Guess
				</button>
			</form>
		</div>
	);
}

export default Menu;
