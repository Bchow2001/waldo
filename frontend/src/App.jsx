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

import { useState, useRef, useEffect, useCallback, useMemo } from "react";

import Menu from "./components/Menu";

import "./App.css";

function CardItem({ character }) {
	return (
		<div className="card">
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
				return <CardItem key={character.name} character={character} />;
			})}
		</dl>
	);
}

function App() {
	const initialContextMenu = useMemo(() => {
		return { show: false, x: 0, y: 0 };
	}, []);
	const initialGuess = { x: 0, y: 0 };
	const [contextMenu, setContextMenu] = useState(initialContextMenu);
	const [guess, setGuess] = useState(initialGuess);
	const [guessed, setGuessed] = useState([]);
	const image = useRef(null);
	const menu = useRef(null);
	const characters = [
		{ name: "Bryan", src: bryan },
		{ name: "Dave", src: dave },
		{ name: "George", src: george },
		{ name: "Hat man", src: hatman },
		{ name: "HULK", src: hulk },
		{ name: "Lara", src: lara },
		{ name: "Ryan", src: ryan },
		{ name: "Mystery Twin One", src: twinone },
		{ name: "Mystery Twin Two", src: twintwo },
		{ name: "Unfortunate Man", src: unfortunate },
	];

	function handleClick(e) {
		const { pageX, pageY } = e;
		const el = e.target.getBoundingClientRect();

		const x = e.clientX - el.left;
		const y = e.clientY - el.top;
		setGuess({ x: x, y: y });

		setContextMenu({ show: true, x: pageX, y: pageY });
	}

	useEffect(() => {
		console.log(guess);
	}, [guess]);

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

	return (
		<>
			<div ref={menu}>
				{contextMenu.show && (
					<Menu
						x={contextMenu.x}
						y={contextMenu.y}
						guess={guess}
						handleClose={handleClose}
					/>
				)}
			</div>
			<h1>WHERE'S BRYAN?</h1>
			<h2>Find the following characters:</h2>
			<div>
				<CardList characters={characters} />
			</div>
			<div>
				<img
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
