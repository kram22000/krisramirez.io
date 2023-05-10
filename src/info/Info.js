import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(5,49,225)", "rgb(18,69,135)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kris",
    lastName: "Ramirez",
    initials: "KR",
    position: "a Technical Engineer II",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Irvine, CA'
        },
        {
            emoji: "💼",
            text: "Technical Engineer II at Panasonic Avionics"
        },
        {
            emoji: "📧",
            text: "enginexred@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://github.com/kram22000",
            icon: "fa fa-github",
            label: 'github'
        },
        
        {
            link: "https://www.linkedin.com/in/kris-ramirez-024b50275/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://krisramirezresume.tiiny.site/",
            icon: "fa fa-file-text",
            label: 'resume'
        },
        
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Kris. I'm a Technical engineer for Panasonic Avionics. I have studied technology all my life in a various fields, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'redux', 'cisco', 'linux', 'postgres'],
            exposedTo: ['nodejs', 'python', 'aws', 'go', 'c++', 'redis']
        }
    ,
    hobbies: [
        {
            label: 'learning',
            emoji: '📖'
        },
        {
            label: 'art',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "KonfidentChat",
            live: "https://konfident-chat-io.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/kram22000/KonfidentChat.io", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Issue Tracker",
            live: "https://bug-tracker-report-laas.vercel.app/",
            source: "https://github.com/kram22000/BugTrackerReport.io.git",
            image: mock2
        },
        {
            title: "Salary Lookup",
            live: "https://github.com/kram22000",
            source: "https://github.com/kram22000/salaryinfo.github.io",
            image: mock3
        },
        {
            title: "Country Information",
            live: "https://map-info-kram22000.vercel.app/",
            source: "https://github.com/kram22000/MapInfo",
            image: mock4
        }
    ]
}