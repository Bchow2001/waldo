import "./Menu.css";

import { useState } from "react";

function Menu({ x, y, guess, handleClose }) {
	const [selectedChar, setSelectedChar] = useState();

	function onRadioChange(e) {
		setSelectedChar(e.target.value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: "POST",
			mode: "cors",
			body: JSON.stringify({
				guess: guess,
				selectedChar: selectedChar,
			}),
		};
		// try {
		// 	let response = await fetch(
		// 		`http://localhost:3000/api/posts`,
		// 		requestOptions,
		// 	);
		// 	if (response.status === 200) {
		// 		navigate("/");
		// 	} else {
		// 		response = await response.json();
		// 		console.log(response);
		// 		setErrors(response.errors);
		// 	}
		// } catch (e) {
		// 	console.log(e);
		// }
	};

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
			}}
		>
			<button onClick={() => handleClose()}>X</button>
			<form action="">
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="bryan"
						value="bryan"
						checked={selectedChar === "bryan"}
						onChange={onRadioChange}
					/>
					<label htmlFor="bryan">Bryan</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="dave"
						value="dave"
						checked={selectedChar === "dave"}
						onChange={onRadioChange}
					/>
					<label htmlFor="dave">Dave</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="george"
						value="george"
						checked={selectedChar === "george"}
						onChange={onRadioChange}
					/>
					<label htmlFor="george">George</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="hatman"
						value="hatman"
						checked={selectedChar === "hatman"}
						onChange={onRadioChange}
					/>
					<label htmlFor="hatman">Hat man</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="hulk"
						value="hulk"
						checked={selectedChar === "hulk"}
						onChange={onRadioChange}
					/>
					<label htmlFor="hulk">HULK</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="lara"
						value="lara"
						checked={selectedChar === "lara"}
						onChange={onRadioChange}
					/>
					<label htmlFor="lara">Lara</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="ryan"
						value="ryan"
						checked={selectedChar === "ryan"}
						onChange={onRadioChange}
					/>
					<label htmlFor="ryan">Ryan</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="twinOne"
						value="twinOne"
						checked={selectedChar === "twinOne"}
						onChange={onRadioChange}
					/>
					<label htmlFor="twinOne">Mystery Twin 1</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="twinTwo"
						value="twinTwo"
						checked={selectedChar === "twinTwo"}
						onChange={onRadioChange}
					/>
					<label htmlFor="twinTwo">Mystery Twin 2</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="unfortunate"
						value="unfortunate"
						checked={selectedChar === "unfortunate"}
						onChange={onRadioChange}
					/>
					<label htmlFor="unfortunate">Unfortunate</label>
				</div>
				<button type="submit" onClick={handleSubmit}>
					Guess
				</button>
			</form>
		</div>
	);
}

export default Menu;
