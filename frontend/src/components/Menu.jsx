function Menu({ x, y }) {
	return (
		<div
			style={{
				top: `${y}px`,
				left: `${x}px`,
				position: "absolute",
				color: "black",
			}}
		>
			Menu
		</div>
	);
}

export default Menu;
