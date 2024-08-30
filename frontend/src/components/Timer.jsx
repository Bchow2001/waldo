import { useEffect, useState } from "react";

function HighScoreItem({ score, number }) {
	return (
		<li>
			<span>
				{number}. {score.name} {score.time}s
			</span>
		</li>
	);
}

function HighScoreList({ highScores }) {
	if (!highScores || !highScores.length) {
		return <h3>There are no high scores yet!</h3>;
	} else {
		return (
			<ul>
				{highScores.map((score, index) => {
					return (
						<HighScoreItem
							number={index + 1}
							key={score._id}
							score={score}
						/>
					);
				})}
			</ul>
		);
	}
}

export default function Timer({
	characters,
	guessed,
	resetTime,
	setResetTime,
}) {
	const initialTime = 0;
	const initialName = "";

	const [runningTime, setRunningTime] = useState(initialTime);
	const [name, setName] = useState(initialName);
	const [submitted, setSubmitted] = useState(false);
	const [highScores, setHighScores] = useState([]);

	useEffect(() => {
		if (submitted === true) {
			const requestOptions = {
				method: "GET",
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				mode: "cors",
			};
			const fetchData = async () => {
				try {
					let response = await fetch(
						`http://localhost:3000/highscore`,
						requestOptions,
					);
					if (response.status === 200) {
						response = await response.json();
						console.log(response);
						setHighScores(response);
					}
				} catch (e) {
					console.log(e);
				}
			};
			fetchData();
		}
	}, [submitted]);

	const handleScoreSubmit = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json",
			}),
			mode: "cors",
			body: JSON.stringify({
				name: name,
				time: runningTime,
			}),
		};
		try {
			let response = await fetch(
				`http://localhost:3000/highscore`,
				requestOptions,
			);
			if (response.status === 200) {
				setSubmitted(true);
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (resetTime === true) {
			setRunningTime(initialTime);
			setResetTime(false);
			setSubmitted(false);
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

	if (guessed.length < characters.length) {
		return <h4>{runningTime}s</h4>;
	} else {
		return (
			<>
				{submitted ? (
					<>
						<p>Submitted!</p>
						<HighScoreList highScores={highScores} />
					</>
				) : (
					<>
						<h4>Save your High Score!</h4>
						<div className="score-form-wrapper">
							<form className="score-form" action="">
								<div>
									<label htmlFor="name">Name:</label>
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Anonymous"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div>
									<label htmlFor="time">Time:</label>
									<input
										type="text"
										name="time"
										id="time"
										value={runningTime}
										readOnly
									/>
								</div>
								<button
									type="submit"
									onClick={handleScoreSubmit}
								>
									Submit
								</button>
							</form>
						</div>
					</>
				)}
			</>
		);
	}
}
