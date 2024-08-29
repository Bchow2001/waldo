import waldoImage from "./assets/beachwaldo.jpg";
import twinone from "./assets/twin1.png";
import twintwo from "./assets/twin2.png";
import bryan from "./assets/bryan.png";
import dave from "./assets/dave.png";
import george from "./assets/george.png";
import hatman from "./assets/hatman.png";
import hulk from "./assets/hulk.png";
import lara from "./assets/lara.png";
import ryan from "./assets/ryan.png";
import unfortunate from "./assets/unfortunate.png";
import marker from "./assets/marker.png";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";

import Menu from "./components/Menu";

import "./App.css";

function CardItem({ character, guessed }) {
	return (
		<div className="card">
			{guessed.some((e) => e.character === character.id) && (
				<div className="cross">X</div>
			)}
			<dt>{`${character.name}`}</dt>
			<dd>
				<img
					src={character.src}
					draggable="false"
					alt={`${character.name}`}
				/>
			</dd>
		</div>
	);
}

function CardList({ characters, guessed }) {
	return (
		<dl className="list">
			{characters.map((character) => {
				return (
					<CardItem
						key={character.name}
						character={character}
						guessed={guessed}
					/>
				);
			})}
		</dl>
	);
}

function Marker({ x, y }) {
	return (
		<>
			<img
				src={marker}
				alt="Marker"
				className="marker"
				style={{
					top: `${y - 40}px`,
					left: `${x - 20}px`,
					height: `40px`,
					position: "absolute",
					zIndex: 1,
				}}
			/>
		</>
	);
}

function MarkerList({ guessed }) {
	return (
		<>
			{guessed.map((guess) => {
				return <Marker key={guess.character} x={guess.x} y={guess.y} />;
			})}
		</>
	);
}

function App() {
	const initialContextMenu = useMemo(() => {
		return { show: false };
	}, []);

	const initialGuess = { x: 0, y: 0 };
	const initialGuessed = [];

	const [contextMenu, setContextMenu] = useState(initialContextMenu);
	const [guess, setGuess] = useState(initialGuess);
	const [guessed, setGuessed] = useState(initialGuessed);

	const image = useRef(null);
	const menu = useRef(null);

	const characters = [
		{ name: "Bryan", src: bryan, id: "bryan" },
		{ name: "Dave", src: dave, id: "dave" },
		{ name: "George", src: george, id: "george" },
		{ name: "Hat man", src: hatman, id: "hatman" },
		{ name: "HULK", src: hulk, id: "hulk" },
		{ name: "Lara", src: lara, id: "lara" },
		{ name: "Ryan", src: ryan, id: "ryan" },
		{ name: "Mystery Twin One", src: twinone, id: "twinOne" },
		{ name: "Mystery Twin Two", src: twintwo, id: "twinTwo" },
		{ name: "Unfortunate Man", src: unfortunate, id: "unfortunate" },
	];

	function handleClick(e) {
		if (guessed.length < characters.length) {
			const el = e.target.getBoundingClientRect();

			const x = e.clientX - el.left;
			const y = e.clientY - el.top;
			setGuess({ x: x, y: y });

			setContextMenu({ show: true });
		}
	}

	const closeMenu = useCallback(
		(e) => {
			if (
				!image.current.contains(e.target) &&
				!menu.current.contains(e.target)
			) {
				setContextMenu(initialContextMenu);
			}
		},
		[initialContextMenu],
	);

	function handleClose() {
		setContextMenu(initialContextMenu);
	}

	useEffect(() => {
		document.addEventListener("mousedown", closeMenu);
		return () => window.removeEventListener("mousedown", closeMenu);
	}, [closeMenu]);

	function addGuessed(char) {
		setGuessed((guessed) => [...guessed, char]);
	}

	function resetGame() {
		handleClose();
		setGuess(initialGuess);
		setGuessed(initialGuessed);
	}

	return (
		<>
			<h1>WHERE'S BRYAN?</h1>

			{guessed.length < characters.length ? (
				<>
					<h2>Find the following characters:</h2>
					<h3>{`You have found ${guessed.length} characters`}</h3>
				</>
			) : (
				<>
					<h2>YOU WIN!!!!</h2>
					<h3>{`You have found all ${characters.length} characters!!`}</h3>
				</>
			)}
			<button onClick={resetGame}>Reset Game</button>
			<div>
				<CardList characters={characters} guessed={guessed} />
			</div>
			<div className="img-wrapper">
				<div ref={menu}>
					{contextMenu.show && (
						<Menu
							guess={guess}
							guessed={guessed}
							addGuessed={addGuessed}
							handleClose={handleClose}
						/>
					)}
				</div>
				<MarkerList guessed={guessed} />
				<img
					className="waldo-img"
					onClick={handleClick}
					ref={image}
					src={waldoImage}
					draggable="false"
					alt="Large image to find Waldo in"
				/>
			</div>
		</>
	);
}

export default App;
