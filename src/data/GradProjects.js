import antik from '../assets/images/projects/antik.svg'

export default [
    {
        id: 1,
        title: "ANTIK Web Framework (2015)",
        icon: antik,
        description: "Built a web application for a packet injection toolkit named ANTIK. The tool’s drawback was its non-scalability. The project was to make it deployable on a global platform and to enable users to test the HTTP Apache server from anywhere on the network. The web app enables users to log in securely and trigger the ANTIK tool from a node on the network. Used Django queue to enqueue the HTTP request for processing, which when serviced, triggers the tool with the necessary inputs. The output from the ANTIK tool is fed into a Redis database, where the client can subscribe for that data using Centrifuge. The report when available, is published to the client page. Programmed the front-end using Bootstrap and used Centrifuge, a real-time messaging server, to allow the user to subscribe to the results. Deployed Redis to store the results from the tool and made use of Django-RQ to maintain a queue of workers. ",
        githubPath: null,
        demoPath: null,
        techUsed: "Python, Django, CSS Bootstrap"
    }
]
