export const routing = {
  navbar: {
    "logo": {
      "source": "https://cdn5.vectorstock.com/i/1000x1000/71/59/project-manager-icon-business-process-leader-vector-16677159.jpg",
      "height": 45,
      "width": 50
    },
    "sections": [
      {
        "title": "Home",
        "href": "/"
      },
      {
        "title": "About",
        "href": "/about"
      },
      {
        "title": "Skills",
        "href": "/skills"
      },
      {
        "title": "Education",
        "href": "/education"
      },
      {
        "title": "Experience",
        "href": "/experience"
      },
      {
        "title": "Projects",
        "href": "/projects"
      },
      {
        "title": "Resume",
        "href": "https://docs.google.com/document/d/1QLzXACCjknLHVDjhUFbU-Jioq5sbnTAQiS1ZvzUTZBU",
        "type": "link"
      }
    ]

  },
  routes: {
    "sections": [
      {
        "component": "About",
        "path": "/about",
        "headerTitle": "About"
      },
      {
        "component": "Skills",
        "path": "/skills",
        "headerTitle": "Skills"
      },
      {
        "component": "Education",
        "path": "/education",
        "headerTitle": "Education"
      },
      {
        "component": "Experience",
        "path": "/experience",
        "headerTitle": "Experience"
      },
      {
        "component": "Projects",
        "path": "/projects",
        "headerTitle": "Projects"
      }
    ]
  },
  home: {
    "name": "Anurag",
    "roles": ["a Technical Lead", "a Python Developer", "a Devops", "a MEAN Stack Developer", "a MERN Stack Developer"]
  },
  social: {
    social: [
      {
        "network": "linkedin",
        "href": "https://www.linkedin.com/in/anuragpolist/"
      },
      {
        "network": "github",
        "href": "https://github.com/anuragicodelabs/"
      },
      {
        "network": "email",
        "href": "mailto:aspolis27@gmail.com"
      }
    ]
  },
  about: {
    "about": "7+ years of experience working as a software engineer with substantial experience in various programming languages, frameworks and architectures thereby building scalable products and services.\n\nUnderstand the requirements and convert them to technical specifications.\n\nDesign and architect the new features and products.\n\nConvert design to task lists and distribute the tasks.\n\nBuild an idea to prototype and the finally build a product out of it. Guide junior developer to help them with the development process. Made many websites and app's in various technologies as like React, Angular, Node, Mongo, My Sql.",
    "imageSource": "images/about/profile.png"
  },
  skills: {
    "intro": "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    "skills": [{

      "title": "Languages & Databases",
      "items": [
        {
          "icon": "images/skills/html.png",
          "title": "HTML"
        },
        {
          "icon": "images/skills/css.png",
          "title": "CSS"
        },
        {
          "icon": "images/skills/wordPress.png",
          "title": "WordPress"
        },
        {
          "icon": "images/skills/js.png",
          "title": "JavaScript"
        },
        {
          "icon": "images/skills/firebase.png",
          "title": "Firebase"
        },
        {
          "icon": "images/skills/mysql.png",
          "title": "MySQL"
        },
        {
          "icon": "images/skills/psql.png",
          "title": "PostgreSQL"
        },
        {
          "icon": "images/skills/mongo-db.png",
          "title": "MongoDB"
        },
        {
          "icon": "images/skills/c-plus-plus.svg",
          "title": "C++"
        }
      ]
    },
    {
      "title": "Frameworks & Technologies",
      "items": [
        {
          "icon": "images/skills/python.png",
          "title": "Python"
        },
        {
          "icon": "images/skills/express.png",
          "title": "ExpressJS"
        },
        {
          "icon": "images/skills/hapi.png",
          "title": "HapiJS"
        },
        {
          "icon": "images/skills/react.png",
          "title": "ReactJS"
        },
        {
          "icon": "images/skills/angular.png",
          "title": "Angular"
        },
        {
          "icon": "images/skills/nodejs.png",
          "title": "NodeJS"
        },
        {
          "icon": "images/skills/graphql.png",
          "title": "GraphQL"
        }
      ]
    },
    {
      "title": "Tools & Platforms",
      "items": [
        {
          "icon": "images/skills/aws.png",
          "title": "AWS"
        },
        {
          "icon": "images/skills/git.png",
          "title": "Git"
        },
        {
          "icon": "images/skills/docker.png",
          "title": "Docker"
        }
      ]
    }
    ]
  },
  education: {
    education: [
      {
        "title": "Aug 2013 - Mar 2017",
        "cardTitle": "B.Tech. Computer Science.",
        "cardSubtitle": "University Institute of Engineering and Techn..., Kurukshetra",
        "cardDetailedText": "Marks - 79%"
      },
      {
        "title": "Apr 2012 - Mar 2013",
        "cardTitle": "High School",
        "cardSubtitle": "Shri mad bhagwat gita senior secondary school, Kurukshetra",
        "cardDetailedText": "Marks - 82%"
      }
    ]
  },
  experiences: [
    {
      "title": "Team Lead",
      "subtitle": "Innovative Code Labs Pvt. Ltd.",
      "workType": "Full-time",
      "workDescription": [
        "Worked on 14 projects (marketplaces)",
        "Implemented Search functionality using **Algolia**",
        "Implemented Chatting Module (frontend + backend) using **socket.io** **sendbird**",
        "Worked on integration of stripe ACH payments & payouts system in marketplace",
        "Developing APIs and performing **CRUD** operations to enable efficient data management",
        "Collaborating closely with clients to understand their requirements and tailored development accordingly",
        "**Technology**: MERN stack (MongoDB, Express.js, React.js, Node.js), **Sharetribe** (low code platform), **AWS S3**, **AWS Lambda**, **Stripe**"
      ],
      "dateText": "04/2021 – Present"
    },
    {
      "title": "Senior Software Engineer",
      "subtitle": "Bridging Technology Pvt. Ltd.",
      "workType": "Full-time",
      "workDescription": [
        "I am working with a product based company. I have worked with the core of a new product, handled its plinth to paramount, used a better methodology to make dream a reality."
      ],
      "dateText": "06/2019 – 04/2021"
    },
    {
      "title": "Software Engineer",
      "subtitle": "Igniva infotech Pvt. Ltd.",
      "workType": "Full-time",
      "workDescription": [
        "•      Buiilding scalable products and services",
        "•      Hiring and mentoring software engineers",
        "•      Building high performance team",
        "•      Agile development process and SDLC"
      ],
      "dateText": "04/2018 – 06/2019"
    },
    {
      "title": "Web/Mobile Engineer",
      "subtitle": "Future Work Technologies Pvt. Ltd.",
      "workType": "Full-time",
      "workDescription": [
        "•      Designing and Architecting small to medium-scale system",
        "•      Ideating, building and growing products",
        "•      Good at connecting with people and building organizational value"
      ],
      "dateText": "09/2017 – 04/2018"
    },
    {
      "title": "Junior Software Developer",
      "subtitle": "CodeQuotient Pvt. Ltd.",
      "workType": "Full-time",
      "workDescription": [
        "•      Create and contribute to open source software",
        "•      Customer focused, data and metrics driven product development"
      ],
      "dateText": "08/2016 – 09/2017"
    }
  ],
  projects: {
    projects: [
      {
        "image": "images/projects/springballgame.png",
        "title": "Spring Ball Game",
        "bodyText": "- Game using **Vanilla JS**. \n - Levels, Pause/Resume.",
        "links": [
          {
            "text": "GitHub",
            "href": "https://github.com/anuragicdelabs/spring-ball"
          },
          {
            "text": "Live",
            "href": "https://anuragicdelabs.github.io/spring-ball/"
          }
        ],
        "tags": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },
      {
        "image": "images/projects/dsa375.png",
        "title": "DSA 375 Tracker",
        "bodyText": "- A progress tracker of 375 IMP questions using **ReactJS** for Students. \n - Students can filter question according to difficulty level, topics, solved/unsolved.\n - Using **Localstorage** to save their progress",
        "links": [
          {
            "text": "GitHub",
            "href": "https://github.com/anuragicdelabs/dsa375"
          },
          {
            "text": "Live",
            "href": "https://anuragicdelabs.github.io/dsa375/"
          }
        ],
        "tags": [
          "React",
          "Redux",
          "MaterialUI",
          "Heroku"
        ]
      },
      {
        "image": "images/projects/weather.png",
        "title": "Weather App",
        "bodyText": "- A Web App that loads data from Open Weather API and show in both **Widget** and **GridLayout**.\n - Facilates Search by Location, City, zip code",
        "links": [
          {
            "text": "GitHub",
            "href": "https://github.com/anuragicdelabs/allProjects"
          },
          {
            "text": "Live",
            "href": "https://anuragicodelabs.onrender.com"
          }
        ],
        "tags": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },
      {
        "image": "images/projects/portfolio-poster.png",
        "title": "Dev Portfolio",
        "bodyText": "- Developer Portfolio Website made in React\n -  Fully customisable and dynamic, easily change data and images.\n - Dark Mode Support",
        "links": [
          {
            "text": "GitHub",
            "href": "https://github.com/anuragicdelabs/portfolio"
          },
          {
            "text": "Live",
            "href": "https://anuragicdelabs.github.io/portfolio"
          }
        ],
        "tags": [
          "React",
          "Portfolio",
          "JavaScript"
        ]
      },
      {
        "image": "images/projects/hbd.png",
        "title": "Happy Birthday Wisher",
        "bodyText": "- A Web App that can be used to wish someone in a unique way. \n - Just type **text** & upload **images** then share **generated URL** with the person. \n - Surprize them to wish in a unique way",
        "links": [
          {
            "text": "GitHub",
            "href": "https://github.com/anuragicdelabs/allProjects"
          },
          {
            "text": "Live",
            "href": "https://anuragicodelabs.onrender.com/hbd"
          }
        ],
        "tags": [
          "HTML",
          "CSS",
          "JavaScript",
          "NodeJS",
          "MongoDB"
        ]
      },
      {
        "title": "Secure Messaging WebApp",
        "image": "images/projects/messanger.png",
        "bodyText": "- A React App that allows users to send texts in real time using **socket.io**.\n - End to End encryption using **RSA** Algorithm.\n - Uses **MongoDB** database to store texts & user profile data.\n - Facilates **Social Media Auth**. \n - Passwords are secured with **hashing** technique \n - Using **nodemailer** for mailing",
        "links": [
          {
            "text": "GitHub",
            "href": "https://github.com/anuragicdelabs/allProjects"
          },
          {
            "text": "Live",
            "href": "https://anuragicodelabs.onrender.com/inbox"
          }
        ],
        "tags": [
          "HTML",
          "CSS",
          "JavaScript",
          "Socket.io",
          "NodeJS",
          "MongoDB",
          "Hash",
          "RSA"
        ]
      }
    ]
  },
};

export default routing;