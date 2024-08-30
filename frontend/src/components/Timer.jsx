import { useEffect, useState } from "react";

export default function Timer({
	characters,
	guessed,
	resetTime,
	setResetTime,
}) {
	const initialTime = 0;

	const [runningTime, setRunningTime] = useState(initialTime);

	useEffect(() => {
		if (resetTime === true) {
			setRunningTime(initialTime);
			setResetTime(false);
		}
		const key = setInterval(() => {
			if (guessed.length < characters.length) {
				setRunningTime((runningTime) => runningTime + 1);
			} else {
				clearInterval(key);
			}
		}, 1000);

		return () => {
			clearInterval(key);
		};
	}, [characters.length, guessed.length, resetTime, setResetTime]);

	return <h4>{runningTime}s</h4>;
}
