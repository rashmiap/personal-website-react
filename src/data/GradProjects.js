import antik from '../assets/images/projects/antik.svg'
import quiz from '../assets/images/projects/quiz.svg'

export default [
    {
        id: 1,
        title: "ANTIK Web Framework",
        icon: antik,
        description: "Built a web application for a packet injection toolkit named ANTIK. The tool’s drawback was its non-scalability. The project was to make it deployable on a global platform and to enable users to test the HTTP Apache server from anywhere on the network. The web app enables users to log in securely and trigger the ANTIK tool from a node on the network. Used Django queue to enqueue the HTTP request for processing, which when serviced, triggers the tool with the necessary inputs. The output from the ANTIK tool is fed into a Redis database, where the client can subscribe for that data using Centrifuge. The report when available, is published to the client page. Programmed the front-end using Bootstrap and used Centrifuge, a real-time messaging server, to allow the user to subscribe to the results. Deployed Redis to store the results from the tool and made use of Django-RQ to maintain a queue of workers. Developed by a 3 member team.",
        githubPath: null,
        demoPath: null,
        year: "2014 - 2015",
        techUsed: "Python, Django, CSS Bootstrap"
    },
    {
      id: 2,
      title: "Bolly-Quiz : Bollywood quizzing app",
      description: "A ‘C’ based static application developed using utility tools like RPM, MELD and MAKE. Developed by a 3 member team. This Quiz Application provides 4 categories - Actors, Movies, Musicians and Miscellaneous to pick from and also tracks the highest score and updates it when necessary.",
      icon: quiz,
      githubPath: null,
      demoPath: null,
      year: "2012",
      techUsed: "C"
    },
    {
      id: 3,
      title: "Graphical Representation of Sorting Algorithms",
      description: "Representation of simple sorting algorithms in a graphical way in order to understand the implementation of them with the help of java applets.",
      icon: quiz,
      githubPath: null,
      demoPath: null,
      year: "2012",
      techUsed: "Java applets"
    }
]
