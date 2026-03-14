/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello there",
  title2: "Mycale",
  logo_name: "My Portfolio",
  full_name: "Mycale C. Radcliffe",
  subTitle:
    "An experienced front-end developer specializing in React, Svelte, and modern web frameworks.",
  resumeLink:
    "https://docs.google.com/document/d/1ebL1p8ao6_fdgb2vLGTBXuRfP4nyRCDi6xIF7LCEvj8/edit?usp=sharing",
  mail: "mailto:mcradcliffe2490@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mcradcliffe2490",
  linkedin: "https://www.linkedin.com/in/mcradcliffe/",
  gmail: "mcradcliffe2490@gmail.com",
  facebook: "https://www.facebook.com",
  twitter: "https://twitter.com/BigPapiKite",
  instagram: "https://www.instagram.com/mcradcliffe/",
};

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "Building responsive, production-grade front ends using React, Svelte, Angular, and Vue",
        "Migrating legacy applications to modern frameworks (AngularJS to React/Angular)",
        "Integrating AI APIs and prompt engineering for intelligent user experiences",
        "Currently consulting at Captech on enterprise-level front-end projects",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Svelte",
          fontAwesomeClassname: "logos:svelte-icon",
          style: {
            color: "#FF3E00",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#CB3837",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "logos:vue",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Other Skills & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "Prompt engineering and AI API integration (ChatGPT, GitHub Copilot)",
        "XML/JSON processing and data transformation pipelines",
        "UX design collaboration with Figma and app design principles",
        "Technical writing, documentation, and maintaining a blog",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Mac",
          fontAwesomeClassname: "wpf:mac-os",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "logos:microsoft-windows",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "North Carolina Agricultural and Technical State University",
      subtitle: "Bachelors in Computer Science",
      logo_path: "Aggies_logo.png",
      alt_name: "NCAT",
      duration: "2018 - 2022",
      descriptions: [
        "Here are some of the classes I took: ",
        "Data Structures | " +
          "Algorithms | " +
          "Programming Languages | " +
          "Database Design | " +
          "Python for Data Science | " +
          "Operating Systems | " +
          "AI & Machine Learning | " +
          "Theory of Computing | " +
          "Discrete Math | " +
          "Internet Systems | " +
          "In Progress Courses | " +
          "Software Engineering | " +
          "Computer Arch & Org | " +
          "Linear Algebra",
      ],
      website_link: "https://www.ncat.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Fundamentals: Core Infrastructure",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/2c67f7b5f82629798a33c61c845c8583",
      alt_name: "Google Cloud",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "HackCLT 2018",
      logo_path: "HackCLT.png",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "HackNCAT 2020",
      logo_path: "HackNCAT.png",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "HackNCAT 2021",
      logo_path: "HackNCAT.png",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience, Internships, and Extracurriculars",
  description:
    "I have several years of professional consulting experience delivering front-end solutions " +
    "for Fortune 500 clients, along with internships at top tech companies. Here are the details.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Front End Developer",
          company: "Captech Consulting",
          company_url: "https://www.captechconsulting.com/",
          logo_path: "captech.jpg",
          duration: "March 2025 - Present",
          location: "Remote",
          description:
            "Fortune 500 Mutual Insurance & Financial Services client. " +
            "Migrating legacy AngularJS application to React 15 class components while implementing updated UX designs from Figma mockups. " +
            "Orchestrating complex application state management using Redux across multiple user workflows and data processing pipelines. " +
            "Implementing comprehensive unit testing suite for Redux action creators, improving code reliability and deployment confidence. " +
            "Leveraging AI-assisted development tools (GitHub Copilot) to accelerate refactoring processes and improve code review practices. " +
            "Technologies: AngularJS to React 15 Migration, Redux, Semantic UI React, Unit Testing, AI-Assisted Development.",
          color: "#ee3c26",
        },
        {
          title: "Frontend Developer",
          company: "Captech Consulting",
          company_url: "https://www.captechconsulting.com/",
          logo_path: "captech.jpg",
          duration: "May 2024 - February 2025",
          location: "Remote",
          description:
            "AI-Powered BPMN Chart Generator. " +
            "Served as sole frontend developer for an innovative AI-driven business process modeling application using Svelte 4. " +
            "Integrated ChatGPT API responses with bpmn.js library to dynamically render interactive BPMN diagrams from user prompts. " +
            "Developed comprehensive user interface including real-time chat, file upload/download, and seamless component interactions. " +
            "Collaborated with UX designer to implement responsive design system using shadcn component library. " +
            "Researched and implemented improved prompt engineering methodology, introducing two-stage JSON-to-XML conversion for enhanced output accuracy. " +
            "Technologies: Svelte 4, bpmn.js, shadcn, ChatGPT API Integration, Prompt Engineering, XML/JSON Processing.",
          color: "#ee3c26",
        },
        {
          title: "Front-End Developer",
          company: "Captech Consulting",
          company_url: "https://www.captechconsulting.com/",
          logo_path: "captech.jpg",
          duration: "August 2024 - December 2024",
          location: "Remote",
          description:
            "Fortune 500 Financial Services Company. " +
            "Gave substantial input for the redesign and implementation of a complex form-based component, leveraging React Context for state management and integrating with existing REST APIs. " +
            "Engineered the component architecture to support real-time data editing while ensuring seamless data persistence. " +
            "Updated multiple components to work with package updates to ag-Grid and proprietary libraries, ensuring compatibility while preserving business logic. " +
            "Participated in a cloud infrastructure migration initiative, working with BogieFiles to facilitate the transfer of AWS resources.",
          color: "#ee3c26",
        },
        {
          title: "QA Tester",
          company: "Captech Consulting",
          company_url: "https://www.captechconsulting.com/",
          logo_path: "captech.jpg",
          duration: "May 2023 - May 2024",
          location: "Remote",
          description:
            "Leading Provider of Specialty Logistics Services. " +
            "Planned, wrote, and executed test cases used in testing a driver logistics app in active development. " +
            "Wrote several test scripts in Appium with the goal of fully automating common tests for the mobile application.",
          color: "#ee3c26",
        },
        {
          title: "Front-End Developer",
          company: "Captech Consulting",
          company_url: "https://www.captechconsulting.com/",
          logo_path: "captech.jpg",
          duration: "October 2022 - April 2023",
          location: "Tysons, VA/Remote",
          description:
            "Fortune 500 Leading Provider of Investment and Business Solutions. " +
            "Worked closely with client to help rewrite a section of their web application from AngularJS to Angular 13. " +
            "This project made heavy use of Angular FormGroups, Jasmine for testing, and the devextreme library for base components.",
          color: "#ee3c26",
        },
        {
          title: "STEP Intern",
          company: "Google",
          company_url: "https://careers.google.com/",
          logo_path: "google_logo.png",
          duration: "May 2019 - Aug 2019, May 2020 - Aug 2020",
          location: "Mountain View, CA and Remote",
          description:
            "(2019) Added full stack functionality for an aspect of a new internal web tool for the DialogFlow team " +
            "which will allow for direct access to look at and manipulate user data via the web tool instead of " +
            "manually querying the database. " +
            "(2020) Worked on several personal projects that used vanilla Javascript, HTML, CSS, and Java Servlets. " +
            "Worked on a project with two other interns where we began building a web application for helping college " +
            "students find housing, where I specifically worked on User Authentication.",
          color: "#ee3c26",
        },
        {
          title: "Front End Intern",
          company: "IBM",
          company_url: "https://www.ibm.com/us-en?ar=1",
          logo_path: "IBM_logo.jpg",
          duration: "Jun 2021 - Aug 2021",
          location: "Remote",
          description:
            "Developed an internal tool to increase productivity by comparing two maintained files against " +
            "an excel specs sheet to find differences and produce a file documenting these differences. " +
            "Developed an internal web tool using Node.js that reads xml files given by the product engineering team " +
            "and produces a webpage that has the xml data organized into tables and functions that can be copied " +
            "instead of manually coding them.",
          color: "#0071C5",
        },
        {
          title: "Undergraduate Research Assistant",
          company: "North Carolina Agricultural and Technical State University",
          company_url:
            "https://www.ncat.edu/provost/undergraduate-research.php",
          logo_path: "NCAT_research.png",
          duration: "Aug 2020 - May 2022",
          location: "Greensboro, NC",
          description:
            "Worked in research on detecting sybils on Twitter and helped write a " +
            "survey paper on quantum machine learning.",
          color: "#ffc601",
        },
      ],
    },
    {
      title: "Extracurriculars",
      experiences: [
        {
          title: "Interview Prep Student Interest Group Co-Lead",
          company: "ACM",
          company_url: "https://www.acm.org/",
          logo_path: "ACM_logo.png",
          duration: "Aug 2020 - May 2021",
          location: "Greensboro, NC",
          description:
            "Help prepare students for technical interviews for internships and full time opportunities",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Leader",
        //   company: "Code For Cause",
        //   company_url: "https://www.codecau.se/",
        //   logo_path: "CFC.jfif",
        //   duration: "Nov 2020 - Present",
        //   location: "SRM IST Kattankulathur",
        //   description:
        //     "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
        //   color: "#a60000",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These are some of the various projects I've worked on in school and in my personal time. You can click a box to be " +
    "taken to the github repository for that project",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "You can contact me at any of the links below. Email is the best way to contact me and I'm usually good about " +
      "responding within 2-3 days. I'm also available for freelance front-end development work.",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "I enjoy writing, so I post from time to time." +
      " I write about the things I'm interested in like tech, media, and theology.",
    link: "https://medium.com/@werty2490",
    avatar_image_path: "blogs_image.svg",
  },
};

// Freelance Form Config
const freelanceFormData = {
  title: "Hire Me",
  subtitle:
    "Looking for a freelance front-end developer? I build modern, responsive websites and web applications. " +
    "Fill out the form below and I'll get back to you within a few days.",
  formspreeEndpoint: "https://formspree.io/f/mlgplykd",
  projectTypes: ["Website", "Web App", "Consultation", "Other"],
  budgetRanges: [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's Discuss",
  ],
};

const projects = {
  data: [
    {
      id: "7",
      name: "AI-Powered BPMN Chart Generator",
      url: "#",
      description:
        "Built as sole frontend developer using Svelte 4 for an AI-driven business process modeling app. " +
        "Integrates ChatGPT API with bpmn.js to dynamically render interactive BPMN diagrams from natural language prompts. " +
        "Features real-time chat, file upload/download, shadcn design system, and a two-stage JSON-to-XML conversion pipeline.",
      languages: [
        {
          name: "Svelte",
          iconifyClass: "logos:svelte",
        },
        {
          name: "ChatGPT API",
          iconifyClass: "logos:openai",
        },
      ],
    },
    {
      id: "0",
      name: "College Roomate Finder",
      url: "https://github.com/googleinterns/step120-2020/pull/10",
      description:
        "This was an internship capstone project that would allow college students to find college students" +
        "to room with when trying to lease housing. I worked on the user authentication for the site",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
          fill: "#",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Marvel Comic Finder",
      url: "https://github.com/mcradcliffe2490/HackNCAT-APP_Team",
      description:
        "A web application that can help recommend you marvel comics to read using the Marvel API",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Blog Post Sample",
      url: "https://github.com/mcradcliffe2490/react_frontend_sample",
      description:
        "Short sample of the front end of a blog site made in React. Fake database using JSONPlaceholder API",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Basic Command Shell",
      url:
        "https://github.com/mcradcliffe2490/Operating-Systems-Work/tree/master/ash",
      description:
        "Basic command shell made for my operating systems class. Takes in basic commands like cd, ls, etc. " +
        "Run in your terminal to start it",
      languages: [
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
      ],
    },
    {
      id: "4",
      name: "Stock trades based on reddit trends",
      url: "https://github.com/mcradcliffe2490/money-maker",
      description:
        "Based on Fireship youtube channel project, scrapes titles from r/wallstreetbets subreddit and gives the data to openai api to decide what stocks to buy" +
        " on alpaca(I used paper money)",
      languages: [
        {
          name: "javascript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "firebase",
          iconifyClass: "logos:firebase",
        },
      ],
    },
    {
      id: "5",
      name: "Navi",
      url: "https://github.com/mcradcliffe2490/Navi",
      description:
        "WORK IN PROGRESS! Website for taking a users gaming preferences and transforming them into PC part recommendations to meet those preferences",
      languages: [
        {
          name: "Svelte",
          iconifyClass: "logos:svelte",
        },
        {
          name: "chatgpt",
          iconifyClass: "logos:openai",
        },
      ],
    },
    {
      id: "6",
      name: "Punchers Past",
      url: "https://github.com/mcradcliffe2490/Punchers-Past",
      description:
        "Fighting game created in the M.U.G.E.N engine based on historical characters. 3D models are original, as are the move sets and animations for the characters." +
        " This was a group project, my work was on mapping character move sets with the character models created by teammates and writing the scripts for gameplay physics",
      languages: [],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  freelanceFormData,
  projects,
};
