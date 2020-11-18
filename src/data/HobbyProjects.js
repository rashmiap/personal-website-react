import movie from "../assets/images/projects/movie.svg";
import audio from "../assets/images/projects/audio.svg";
import game from "../assets/images/projects/game.svg";
import fitness from "../assets/images/projects/fitness.svg";

export default [
	{
		id: 1,
		title: "React Redux Movies/TV Shows App",
		icon: movie,
		description:
			"This is a responsive movies and TV shows app built using ReactJS and utilizes Redux for state management. The Movie Database (TMDb) API is used to fetch data. You can navigate between the latest movies and the latest TV shows.",
		githubPath: "https://github.com/rashmiap/react-redux-TMDb-app",
		demoPath: "https://redux-tmdb-app.surge.sh/",
		year: "2018",
		techUsed: "React, Redux, Redux-Thunk, TMDb api",
	},
	{
		id: 2,
		title: "Music Artist Search App",
		icon: audio,
		description:
			"This is a small and simple artist search app developed in ReactJS using the audioDB api.",
		githubPath: "https://github.com/rashmiap/audioDB-react-app",
		demoPath: "https://audiodb-artist-searchapp.surge.sh",
		year: "2018",
		techUsed: "React, Material-UI, theaudiodb",
	},
	{
		id: 3,
		title: "Bulls and Cows React game",
		icon: game,
		description:
			"Bulls and Cows is an old code breaking mind game.The goal of this game is to guess a 4-digit number within the least number of attempts possible. With every guess, you will get a feedback indicating how many Bulls and Cows you got with the guess.",
		githubPath: "https://github.com/rashmiap/bulls-cows-react-game",
		demoPath: "https://bulls-cows-game.surge.sh",
		year: "2018",
		techUsed: "React, styled-components",
	},
	{
		id: 4,
		title: "Exercise Journal API",
		icon: fitness,
		description:
			"A REST API that processes exercise activity which was part of the freecode curriculum. The frontend is built using HTML/CSS and is used to demo API functions. API is built using Node/Express and handles data creation, updates, and retrieval. Backend is a MongoDB document database that stores user and exercise data.",
		githubPath: "https://github.com/rashmiap/fcc-exercisetracker",
		demoPath: "https://exercise-rash-tracker.glitch.me",
		year: "2018",
		techUsed: "NodeJS, MongoDB, Mongoose",
	},
	{
		id: 5,
		title: "React MobX Movies App",
		icon: movie,
		description:
			"This is a responsive movies app that displays the latest upcoming movies, built using ReactJS and utilizes MobX for state management.The Movie Database (TMDb) API is used to fetch data. Can search for movies based on movie name. Can view full details including cast members of each movie by clicking on 'See More' button.",
		githubPath: "https://github.com/rashmiap/mobx-tmdb-react-app",
		demoPath: "http://mobx-tmdb-app.surge.sh/",
		year: "2019",
		techUsed: "React, MobX, Material-UI, TMDb api",
	},
];
