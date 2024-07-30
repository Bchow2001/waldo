import "./Menu.css";

function Menu({ x, y, handleClose }) {
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
					/>
					<label htmlFor="bryan">Bryan</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="dave"
						value="dave"
					/>
					<label htmlFor="dave">Dave</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="george"
						value="george"
					/>
					<label htmlFor="george">George</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="hatman"
						value="hatman"
					/>
					<label htmlFor="hatman">Hat man</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="hulk"
						value="hulk"
					/>
					<label htmlFor="hulk">HULK</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="lara"
						value="lara"
					/>
					<label htmlFor="lara">Lara</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="ryan"
						value="ryan"
					/>
					<label htmlFor="ryan">Ryan</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="twinOne"
						value="twinOne"
					/>
					<label htmlFor="twinOne">Mystery Twin 1</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="twinTwo"
						value="twinTwo"
					/>
					<label htmlFor="twinTwo">Mystery Twin 2</label>
				</div>
				<div className="form-group">
					<input
						type="radio"
						name="character"
						id="unfortunate"
						value="unfortunate"
					/>
					<label htmlFor="unfortunate">Unfortunate</label>
				</div>
				<button type="submit">Guess</button>
			</form>
		</div>
	);
}

export default Menu;

//Change to form with Radio button
