export const analyticsId = 'UA-174238252-2';

export const greeting = {
	title: 'Hello there',
	title2: 'Mycale',
	logo_name: 'My Portfolio',
	full_name: 'Mycale C. Radcliffe',
	subTitle:
		'An experienced front-end developer specializing in React, Svelte, and modern web frameworks.',
	resumeLink:
		'https://drive.google.com/file/d/1UOZRrfWrXvRVuRXi7zeNeNcvS25I5PCd/view?usp=sharing',
	mail: 'mailto:mcradcliffe2490@gmail.com'
};

export const socialMediaLinks = {
	github: 'https://github.com/mcradcliffe2490',
	linkedin: 'https://www.linkedin.com/in/mcradcliffe/',
	gmail: 'mcradcliffe2490@gmail.com',
	twitter: 'https://twitter.com/BigPapiKite',
	instagram: 'https://www.instagram.com/mcradcliffe/'
};

export interface SoftwareSkill {
	skillName: string;
	fontAwesomeClassname: string;
	style?: Record<string, string>;
}

export interface SkillCategory {
	title: string;
	fileName: string;
	skills: string[];
	softwareSkills: SoftwareSkill[];
}

export const skills: { data: SkillCategory[] } = {
	data: [
		{
			title: 'Front-End Development',
			fileName: 'FullStackImg',
			skills: [
				'Building responsive, production-grade front ends using React, Svelte, Angular, and Vue',
				'Migrating legacy applications to modern frameworks (AngularJS to React/Angular)',
				'Integrating AI APIs and prompt engineering for intelligent user experiences',
				'Currently consulting at Captech on enterprise-level front-end projects'
			],
			softwareSkills: [
				{ skillName: 'HTML5', fontAwesomeClassname: 'simple-icons:html5', style: { color: '#E34F26' } },
				{ skillName: 'CSS3', fontAwesomeClassname: 'fa-css3', style: { color: '#1572B6' } },
				{ skillName: 'JavaScript', fontAwesomeClassname: 'simple-icons:javascript', style: { backgroundColor: '#FFFFFF', color: '#F7DF1E' } },
				{ skillName: 'ReactJS', fontAwesomeClassname: 'simple-icons:react', style: { color: '#61DAFB' } },
				{ skillName: 'Svelte', fontAwesomeClassname: 'logos:svelte-icon', style: { color: '#FF3E00' } },
				{ skillName: 'Angular', fontAwesomeClassname: 'simple-icons:angular', style: { backgroundColor: '#FFFFFF', color: '#CB3837' } },
				{ skillName: 'Vue', fontAwesomeClassname: 'logos:vue', style: { color: '#4FC08D' } },
				{ skillName: 'Redux', fontAwesomeClassname: 'logos:redux', style: { color: '#764ABC' } },
				{ skillName: 'NPM', fontAwesomeClassname: 'simple-icons:npm', style: { color: '#CB3837' } },
				{ skillName: 'Git', fontAwesomeClassname: 'simple-icons:git', style: { color: '#E94E32' } },
				{ skillName: 'Figma', fontAwesomeClassname: 'logos:figma', style: { color: '#F24E1E' } }
			]
		},
		{
			title: 'Other Skills & Tools',
			fileName: 'CloudInfraImg',
			skills: [
				'Prompt engineering and AI API integration (ChatGPT, GitHub Copilot)',
				'XML/JSON processing and data transformation pipelines',
				'UX design collaboration with Figma and app design principles',
				'Technical writing, documentation, and maintaining a blog'
			],
			softwareSkills: [
				{ skillName: 'Firebase', fontAwesomeClassname: 'simple-icons:firebase', style: { color: '#FFCA28' } },
				{ skillName: 'Python', fontAwesomeClassname: 'simple-icons:python', style: { color: '#3776AB' } },
				{ skillName: 'Linux', fontAwesomeClassname: 'logos:linux-tux' },
				{ skillName: 'Mac', fontAwesomeClassname: 'wpf:mac-os', style: { color: '#333333' } },
				{ skillName: 'Windows', fontAwesomeClassname: 'logos:microsoft-windows' }
			]
		}
	]
};

export interface Experience {
	title: string;
	company: string;
	company_url: string;
	logo_path: string;
	duration: string;
	location: string;
	description: string;
	color: string;
}

export interface ExperienceSection {
	title: string;
	experiences: Experience[];
}

export const experience = {
	title: 'Experience',
	subtitle: 'Work Experience, Internships, and Extracurriculars',
	description:
		'I have several years of professional consulting experience delivering front-end solutions for Fortune 500 clients, along with internships at top tech companies.',
	sections: [
		{
			title: 'Work Experience',
			experiences: [
				{
					title: 'Front End Developer',
					company: 'Captech Consulting',
					company_url: 'https://www.captechconsulting.com/',
					logo_path: 'captech.jpg',
					duration: 'March 2025 - Present',
					location: 'Remote',
					description:
						'Fortune 500 Mutual Insurance & Financial Services client. Migrating legacy AngularJS application to React 15 class components while implementing updated UX designs from Figma mockups. Orchestrating complex application state management using Redux across multiple user workflows and data processing pipelines.',
					color: '#ee3c26'
				},
				{
					title: 'Frontend Developer',
					company: 'Captech Consulting',
					company_url: 'https://www.captechconsulting.com/',
					logo_path: 'captech.jpg',
					duration: 'May 2024 - February 2025',
					location: 'Remote',
					description:
						'AI-Powered BPMN Chart Generator. Served as sole frontend developer for an innovative AI-driven business process modeling application using Svelte 4. Integrated ChatGPT API responses with bpmn.js library to dynamically render interactive BPMN diagrams from user prompts.',
					color: '#ee3c26'
				},
				{
					title: 'Front-End Developer',
					company: 'Captech Consulting',
					company_url: 'https://www.captechconsulting.com/',
					logo_path: 'captech.jpg',
					duration: 'August 2024 - December 2024',
					location: 'Remote',
					description:
						'Fortune 500 Financial Services Company. Gave substantial input for the redesign and implementation of a complex form-based component, leveraging React Context for state management and integrating with existing REST APIs.',
					color: '#ee3c26'
				},
				{
					title: 'QA Tester',
					company: 'Captech Consulting',
					company_url: 'https://www.captechconsulting.com/',
					logo_path: 'captech.jpg',
					duration: 'May 2023 - May 2024',
					location: 'Remote',
					description:
						'Leading Provider of Specialty Logistics Services. Planned, wrote, and executed test cases used in testing a driver logistics app in active development. Wrote several test scripts in Appium with the goal of fully automating common tests for the mobile application.',
					color: '#ee3c26'
				},
				{
					title: 'Front-End Developer',
					company: 'Captech Consulting',
					company_url: 'https://www.captechconsulting.com/',
					logo_path: 'captech.jpg',
					duration: 'October 2022 - April 2023',
					location: 'Tysons, VA/Remote',
					description:
						'Fortune 500 Leading Provider of Investment and Business Solutions. Worked closely with client to help rewrite a section of their web application from AngularJS to Angular 13.',
					color: '#ee3c26'
				},
				{
					title: 'STEP Intern',
					company: 'Google',
					company_url: 'https://careers.google.com/',
					logo_path: 'google_logo.png',
					duration: 'May 2019 - Aug 2019, May 2020 - Aug 2020',
					location: 'Mountain View, CA and Remote',
					description:
						'(2019) Added full stack functionality for an aspect of a new internal web tool for the DialogFlow team. (2020) Worked on several personal projects and a capstone project building a web application for helping college students find housing.',
					color: '#ee3c26'
				},
				{
					title: 'Front End Intern',
					company: 'IBM',
					company_url: 'https://www.ibm.com/us-en',
					logo_path: 'IBM_logo.jpg',
					duration: 'Jun 2021 - Aug 2021',
					location: 'Remote',
					description:
						'Developed internal tools to increase productivity by comparing maintained files against spec sheets and producing difference reports. Built an internal web tool using Node.js that reads XML files and produces organized tables.',
					color: '#0071C5'
				},
				{
					title: 'Undergraduate Research Assistant',
					company: 'North Carolina A&T State University',
					company_url: 'https://www.ncat.edu/provost/undergraduate-research.php',
					logo_path: 'NCAT_research.png',
					duration: 'Aug 2020 - May 2022',
					location: 'Greensboro, NC',
					description:
						'Worked in research on detecting sybils on Twitter and helped write a survey paper on quantum machine learning.',
					color: '#ffc601'
				}
			]
		},
		{
			title: 'Extracurriculars',
			experiences: [
				{
					title: 'Interview Prep Student Interest Group Co-Lead',
					company: 'ACM',
					company_url: 'https://www.acm.org/',
					logo_path: 'ACM_logo.png',
					duration: 'Aug 2020 - May 2021',
					location: 'Greensboro, NC',
					description:
						'Help prepare students for technical interviews for internships and full time opportunities.',
					color: '#4285F4'
				}
			]
		}
	] as ExperienceSection[]
};

export const projectsHeader = {
	title: 'Projects',
	description:
		'These are some of the various projects I\'ve worked on in school and in my personal time. Click a card to view the GitHub repository.'
};

export interface Project {
	id: string;
	name: string;
	url: string;
	description: string;
	languages: { name: string; iconifyClass: string }[];
}

export const projects: { data: Project[] } = {
	data: [
		{
			id: '7',
			name: 'AI-Powered BPMN Chart Generator',
			url: '#',
			description:
				'Built as sole frontend developer using Svelte 4 for an AI-driven business process modeling app. Integrates ChatGPT API with bpmn.js to dynamically render interactive BPMN diagrams from natural language prompts.',
			languages: [
				{ name: 'Svelte', iconifyClass: 'logos:svelte' },
				{ name: 'ChatGPT API', iconifyClass: 'logos:openai' }
			]
		},
		{
			id: '0',
			name: 'College Roommate Finder',
			url: 'https://github.com/googleinterns/step120-2020/pull/10',
			description:
				'Internship capstone project that would allow college students to find roommates when trying to lease housing. I worked on the user authentication for the site.',
			languages: [
				{ name: 'ReactJS', iconifyClass: 'logos-react' },
				{ name: 'Firebase', iconifyClass: 'logos-firebase' }
			]
		},
		{
			id: '1',
			name: 'Marvel Comic Finder',
			url: 'https://github.com/mcradcliffe2490/HackNCAT-APP_Team',
			description:
				'A web application that can help recommend you marvel comics to read using the Marvel API.',
			languages: [
				{ name: 'HTML5', iconifyClass: 'logos-html-5' },
				{ name: 'JavaScript', iconifyClass: 'logos-javascript' }
			]
		},
		{
			id: '2',
			name: 'Blog Post Sample',
			url: 'https://github.com/mcradcliffe2490/react_frontend_sample',
			description:
				'Short sample of the front end of a blog site made in React. Fake database using JSONPlaceholder API.',
			languages: [{ name: 'ReactJS', iconifyClass: 'logos-react' }]
		},
		{
			id: '3',
			name: 'Basic Command Shell',
			url: 'https://github.com/mcradcliffe2490/Operating-Systems-Work/tree/master/ash',
			description:
				'Basic command shell made for my operating systems class. Takes in basic commands like cd, ls, etc.',
			languages: [{ name: 'C++', iconifyClass: 'logos:c-plusplus' }]
		},
		{
			id: '4',
			name: 'Stock Trades Based on Reddit Trends',
			url: 'https://github.com/mcradcliffe2490/money-maker',
			description:
				'Scrapes titles from r/wallstreetbets and gives the data to OpenAI API to decide what stocks to buy on Alpaca (paper money).',
			languages: [
				{ name: 'JavaScript', iconifyClass: 'logos:javascript' },
				{ name: 'Firebase', iconifyClass: 'logos:firebase' }
			]
		},
		{
			id: '5',
			name: 'Navi',
			url: 'https://github.com/mcradcliffe2490/Navi',
			description:
				'Website for taking a user\'s gaming preferences and transforming them into PC part recommendations.',
			languages: [
				{ name: 'Svelte', iconifyClass: 'logos:svelte' },
				{ name: 'ChatGPT', iconifyClass: 'logos:openai' }
			]
		},
		{
			id: '6',
			name: 'Punchers Past',
			url: 'https://github.com/mcradcliffe2490/Punchers-Past',
			description:
				'Fighting game created in the M.U.G.E.N engine based on historical characters. 3D models are original, as are the move sets and animations.',
			languages: []
		}
	]
};

export const contactPageData = {
	contactSection: {
		title: 'Contact Me',
		profile_image_path: 'profile.png',
		description:
			'You can contact me at any of the links below. Email is the best way to contact me and I\'m usually good about responding within 2-3 days. I\'m also available for freelance front-end development work.'
	},
	blogSection: {
		title: 'Blog',
		subtitle:
			'I enjoy writing, so I post from time to time. I write about the things I\'m interested in like tech, culture, and theology.',
		link: 'https://substack.com/@mcradcliffe'
	}
};

export const freelanceFormData = {
	title: 'Hire Me',
	subtitle:
		'Looking for a freelance front-end developer? I build modern, responsive websites and web applications. Fill out the form below and I\'ll get back to you within a few days.',
	formspreeEndpoint: 'https://formspree.io/f/mlgplykd',
	projectTypes: ['Website', 'Web App', 'Consultation', 'Other'],
	budgetRanges: ['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000+', "Let's Discuss"]
};
