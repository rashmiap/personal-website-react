import movie from '../assets/images/projects/movie.svg'
import audio from '../assets/images/projects/audio.svg'
import game from '../assets/images/projects/game.svg'
import todo from '../assets/images/projects/todo.svg'
import quote from '../assets/images/projects/quote.svg'

export default [
    {
        id: 1,
        title: "React Redux Movies/TV Shows App",
        icon: movie,
        description: "This is a responsive movies and TV shows app built using ReactJS and utilizes Redux for state management. The Movie Database (TMDb) API is used to fetch data. You can navigate between the latest movies and the latest TV shows.",
        githubPath: "https://github.com/rashmiap/react-redux-TMDb-app",
        demoPath: "https://redux-tmdb-app.surge.sh/",
        techUsed: "React, Redux, Redux-Thunk, TMDb api"
    },
    {
        id: 2,
        title: "Music Artist Search App",
        icon: audio,
        description: "This is a small and simple artist search app developed in ReactJS using the audioDB api.",
        githubPath: "https://github.com/rashmiap/audioDB-react-app",
        demoPath: "https://audiodb-artist-searchapp.surge.sh",
        techUsed: "React, Material-UI, theaudiodb"
    },
    {
        id: 3,
        title: "Bulls and Cows React game",
        icon: game,
        description: "Bulls and Cows is an old code breaking mind game.The goal of this game is to guess a 4-digit number within the least number of attempts possible. With every guess, you will get a feedback indicating how many Bulls and Cows you got with the guess.",
        githubPath: "https://github.com/rashmiap/bulls-cows-react-game",
        demoPath: "https://bulls-cows-game.surge.sh",
        techUsed: "React, styled-components"
    },
    {
        id: 4,
        title: "React motion ToDo App",
        icon: todo,
        description: "This is a simple responsive ToDo app developed using React and React-motion",
        githubPath: "https://github.com/rashmiap/react-motion-todo",
        demoPath: "https://react-motion-todo.surge.sh/",
        techUsed: "React, React-motion, Material-UI"
    },
    {
        id: 5,
        title: "React Quote Machine",
        icon: quote,
        description: "A responsive ReactJS random quote generator machine 🔮",
        githubPath: "https://github.com/rashmiap/react-quote-machine",
        demoPath: "https://react-quote-machine.surge.sh",
        techUsed: "React, create-react-app"
    },
];
