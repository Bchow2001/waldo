import "./Menu.css";

function Menu({ x, y }) {
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
			<ul>
				<li className="menu-item">
					<div className="item-div">Bryan</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Dave</div>
				</li>
				<li className="menu-item">
					<div className="item-div">George</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Hat man</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Hulk</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Lara</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Ryan</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Mystery Twin 1</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Mystery Twin 2</div>
				</li>
				<li className="menu-item">
					<div className="item-div">Unfortunate Man</div>
				</li>
			</ul>
		</div>
	);
}

export default Menu;

//Change to form with Radio button
