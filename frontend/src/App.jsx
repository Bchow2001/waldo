import { useState } from "react";
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
import "./App.css";

function App() {
	return (
		<>
			<h1>WHERE'S BRYAN?</h1>
			<h2>Find the following characters:</h2>
			<div>
				<dl className="list">
					<div className="card">
						<dt>Bryan</dt>
						<dd>
							<img src={bryan} alt="Bryan" />
						</dd>
					</div>
					<div className="card">
						<dt>Dave</dt>
						<dd>
							<img src={dave} alt="Dave" />
						</dd>
					</div>
					<div className="card">
						<dt>George</dt>
						<dd>
							<img src={george} alt="George" />
						</dd>
					</div>
					<div className="card">
						<dt>Hat man</dt>
						<dd>
							<img src={hatman} alt="Hatman" />
						</dd>
					</div>
					<div className="card">
						<dt>Hulk</dt>
						<dd>
							<img src={hulk} alt="Hulk" />
						</dd>
					</div>
					<div className="card">
						<dt>Lara</dt>
						<dd>
							<img src={lara} alt="Lara" />
						</dd>
					</div>
					<div className="card">
						<dt>Ryan</dt>
						<dd>
							<img src={ryan} alt="Ryan" />
						</dd>
					</div>
					<div className="card">
						<dt>Mystery Twins</dt>
						<dd>
							<img src={twinOne} alt="Twin one" />
							<img src={twinTwo} alt="Twin two" />
						</dd>
					</div>
					<div className="card">
						<dd>Unfortunate man</dd>
						<dd>
							<img src={unfortunate} alt="Unfortunate Man" />
						</dd>
					</div>
				</dl>
			</div>
			<div>
				<img src={waldoImage} alt="" />
			</div>
		</>
	);
}

export default App;
