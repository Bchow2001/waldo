import waldoImage from "./assets/beachwaldo.jpg";
import twinOne from "./assets/twin1.png";
import twinTwo from "./assets/twin2.png";
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

function App() {
	const initialContextMenu = useMemo(() => {
		return { show: false, x: 0, y: 0 };
	}, []);
	const [contextMenu, setContextMenu] = useState(initialContextMenu);
	const image = useRef(null);
	const menu = useRef(null);

	function handleClick(e) {
		const { pageX, pageY } = e;
		setContextMenu({ show: true, x: pageX, y: pageY });
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

	useEffect(() => {
		document.addEventListener("mousedown", closeMenu);
		return () => window.removeEventListener("mousedown", closeMenu);
	}, [closeMenu]);

	return (
		<>
			<div ref={menu}>
				{contextMenu.show && (
					<Menu x={contextMenu.x} y={contextMenu.y} />
				)}
			</div>
			<h1>WHERE'S BRYAN?</h1>
			<h2>Find the following characters:</h2>
			<div>
				<dl className="list">
					<div className="card">
						<dt>Bryan</dt>
						<dd>
							<img src={bryan} draggable="false" alt="Bryan" />
						</dd>
					</div>
					<div className="card">
						<dt>Dave</dt>
						<dd>
							<img src={dave} draggable="false" alt="Dave" />
						</dd>
					</div>
					<div className="card">
						<dt>George</dt>
						<dd>
							<img src={george} draggable="false" alt="George" />
						</dd>
					</div>
					<div className="card">
						<dt>Hat man</dt>
						<dd>
							<img src={hatman} draggable="false" alt="Hatman" />
						</dd>
					</div>
					<div className="card">
						<dt>Hulk</dt>
						<dd>
							<img src={hulk} draggable="false" alt="Hulk" />
						</dd>
					</div>
					<div className="card">
						<dt>Lara</dt>
						<dd>
							<img src={lara} draggable="false" alt="Lara" />
						</dd>
					</div>
					<div className="card">
						<dt>Ryan</dt>
						<dd>
							<img src={ryan} draggable="false" alt="Ryan" />
						</dd>
					</div>
					<div className="card">
						<dt>Mystery Twin 1</dt>
						<dd>
							<img
								src={twinOne}
								draggable="false"
								alt="Twin one"
							/>
						</dd>
					</div>
					<div className="card">
						<dt>Mystery Twin 2</dt>
						<dd>
							<img
								src={twinTwo}
								draggable="false"
								alt="Twin two"
							/>
						</dd>
					</div>
					<div className="card">
						<dd>Unfortunate man</dd>
						<dd>
							<img
								src={unfortunate}
								draggable="false"
								alt="Unfortunate Man"
							/>
						</dd>
					</div>
				</dl>
			</div>
			<div onClick={handleClick} ref={image}>
				<img
					src={waldoImage}
					draggable="false"
					alt="Large image to find Waldo in"
				/>
			</div>
		</>
	);
}

export default App;
