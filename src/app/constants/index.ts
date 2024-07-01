import { ProjectData } from "../types/index";

const nextLevelProject: ProjectData = {
  id: 1,
  projectType: "personal",
  header: "Next-Level Games",
  subheader: "Next.js Game Information Web Application",
  technologyList: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Postman", "Shadcn UI"],
  description:
    "Discover an expansive world of gaming with our game information web application with access to over 850,000+ games. The web application is built on Next.js with frequently updated data fetched via API from RAWG API.",
  liveLinkObj: {
    buttonText: "View Live",
    url: "https://next-level-games.vercel.app/",
  },
  siteLinkObj: {
    buttonText: "View Code",
    url: "https://github.com/bartswierz/game-website",
  },
  imageList: [
    "/assets/images/NLG-browse-genre.png",
    "/assets/images/NLG-gamepage.png",
    "/assets/images/NLG-genres.png",
    "/assets/images/NLG-browse-platforms.png",
    "/assets/images/NLG-platforms.png",
  ],
  accordionList: [
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "Next-Level Games is a game information web application similar to Steam that allows vistors to browse through virtually all available games in the world surpassing over 850,000+ games that are frequently updated by RAWG API. Data is accessed through using RAWG API's API. Vistors can directly search for games or browse through the various genres and platforms. The web application is built with Next.js, TypeScript, Tailwind CSS, and Shadcn. Building the app required extensively reading through RAWG API Documentation along with Postman to test fetch calls as there were many kinds of calls and query parameters for all kinds of game data. The web application is deployed on Netlify and the code is hosted on GitHub.",
    },
    {
      title: "Why Did I Build This Project?",
      contentType: "paragraph",
      content:
        "I built this project to challenge my learning of Next.js by creating an app that required heavy use of dyanmic routing and API calls to fetch large data with minimal hard coding. I also wanted to improve upon my Tailwind CSS knowledge which meshes extremely well with Next.js. This was also an app I always wanted to build as one of my favorite childhood past time was video games, now that I am older, I don't have much free time so this was a great way to get childhood nostalgia and truly enjoy building this app. I wanted to also really challenge myself and use a large dataset to fetch from, which led me to research RAWG API which gave developers access to over 850,000+ games of data. I also wanted to focus on data that would require focusing on reading documentation which is more inline to how real world projects work. The RAWG API documentation was written beautifully and very organized that made the process of testing their API calls a painless process in Postman. The fetch calls were humongous which required extensive use of Postman to test and understand the data that was received. Postman was invaluable in helping me understand how to structure the project.",
    },
    {
      title: "Build Difficulties?",
      contentType: "paragraph",
      content:
        "The difficulty with this project came down to learning new technologies such as Next.js, Tailwind CSS, and understanding how to use RAWG API within Postman by reading through documentation. The first few days were spent reading through Next.js docs, RAWG API docs, Tailwind CSS docs and building API call functions in our utilities directory to prepare on rendering game data. There was many different kinds of API fetches offered by RAWG API that it made it very important to take the time to organize our app early on which paid off tenfold as the app grew. Once I familarized myself with Next.js file structure and best practices with Next.js version 13.4.8+, I was able to slowly get progress by building out the basic layout structure of the app. This allowed us to get up and running and starting testing our API calls, and building out our components and pages with Tailwind CSS. My main difficulty came down to how I could render dyanmic pages with our sidebar navigation due to needing to figure out a way to display all game data based on platforms, genres, stores, and developers. A large chunk of time was spent on our sidebar fleshing out our layout to be responsive and also ensure each sidebar link worked correctly to dynamically route the user by figuring out which parameters the RAWG API required to fetch the correct data. Another difficulty was figuring out how to build our own sidebar that required some use of Redux to store our state(is the sidebar open & toggle state) and useEffects to track screen window width to open or close the sidebar automatically depending on if the user is on mobile or desktop.",
    },
    {
      title: "Project Features",
      contentType: "list",
      content: [
        "Implement Game Rating Data",
        "Implement Game Achievements Data",
        "Implement User Login & Authentication",
        "Implement Advanced Game Search with Combobox for Search Filters",
      ],
    },
  ],
};

const alphaFootwearProject: ProjectData = {
  id: 2,
  projectType: "personal",
  header: "Alpha Footwear",
  subheader: "Full-Stack E-Commerce Web Application",
  technologyList: ["React.js", "TypeScript", "Firebase", "Redux", "SCSS", "Material UI"],
  description:
    "A modern user-friendly E-commerce web application containing a wide selection of footwear. All product data and user authentication is stored on the back-end utilizing our Firebase Database. The web application is built with scalability in mind and can easily accomodate more products without further configuration.",
  liveLinkObj: {
    buttonText: "View Live",
    url: "https://alpha-footwear.netlify.app/",
  },
  siteLinkObj: {
    buttonText: "View Code",
    url: "https://github.com/bartswierz/shopping-website",
  },
  imageList: [
    "/assets/images/alpha-footwear-product.png",
    "/assets/images/alpha-footwear-checkout.png",
    "/assets/images/alpha-footwear-cart.png",
    "/assets/images/alpha-footwear-signin.png",
    "/assets/images/alpha-footwear-homepage.png",
  ],
  accordionList: [
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "Alpha Footwear is the solution for getting top quality footwear without breaking the bank. Customers will enjoy and appreciate a minimalist layout without overwhelming distractions cluttering the screen. The user experience was the push for keeping the layout as minimal as possible without compromising other sections.",
    },
    {
      title: "Why Did I Build This Project>",
      contentType: "paragraph",
      content:
        "I built this project to challenge myself by creating a large e-commerce app. My previous project(Bots-for-hire) helped get a basic understanding of React which allowed me to set the bar higher this time around and push myself to create a scalable React App. Going into the project, I have planned to update this project as I learn new technologies. I built the majority of my app quickly within a span of two-three weeks before starting my Frontend Internship in January(2023). Since then I have been learning TypeScript and Material UI which have been really enjoyable to learn. I have grown to love TypeScript after a short period of time and while I am still learning, I plan to use TypeScript for all my future projects because of how helpful it has been to help catch and prevent difficult bugs during development.",
    },
    {
      title: "Build Difficulties?",
      contentType: "paragraph",
      content:
        "The difficultly with this project came down to learning new technologies and implementing them as I improved. I built this project shortly after completing my React Udemy course and tested myself by putting everything I had learned to use. Learning multiple technologies at once made it a bit more difficult requiring reading a lot of documentation but it turned out to be enjoyable and very beneficial. I learned more about Firebase, Material UI, and recently, TypeScript. Implementing TypeScript into my application after already doing the majority of it with JavaScript proved to have its challenges as the change gave me many errors upon changing. However, learning the basics first helped me resolve my errors and turned out to be enjoyable converting my project. What really helped me was using my previous classroom experience working with Java. Java being a strongly typed language, made learning the syntax of TypeScript easier to understand. Overall, I enjoyed using TypeScript and plan to use it for all my future projects because of how useful it can be during development and refactoring code.",
    },
    {
      title: "Project Features",
      contentType: "list",
      content: [
        "Update Product Card Mobile Design",
        "Flesh out the Shipping/Checkout section",
        "Update Size and Color Select in Product Card",
        "Add Unit Tests using Jest",
      ],
    },
  ],
};

const trailHawkProject: ProjectData = {
  id: 3,
  projectType: "personal",
  header: "Trailhawk",
  subheader: "Hiking & State Park Map App",
  technologyList: ["React.js", "Tailwind CSS", "React-leaflet", "Google Maps API"],
  description:
    "If youre an avid hiker or just looking for a new adventure, Trailhawk is the perfect app for you. Trailhawk lets you discover the best of the U.S. State Parks and National Parks. From casual hiking trails to treks spanning over 2000 miles, Trailhawk has you covered.",
  liveLinkObj: {
    buttonText: "View Live",
    url: "https://trailhawk.netlify.app/",
  },
  siteLinkObj: {
    buttonText: "View Code",
    url: "https://github.com/bartswierz/map-search",
  },
  imageList: ["/assets/images/trailhawk_search.png", "/assets/images/trailhawk_modal.png"],

  accordionList: [
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "This Trailhawk web application is a map app built using React, Tailwind CSS, React-Leaflet, and Google Maps API. The app allows users to search for hiking trails and state parks in the United States with an autocomplete matching user input by filtering through our current 27 locations across the United States. The app is built with scalability in mind and can easily accomodate more data without further configuration. The app is deployed on Netlify and the code is hosted on GitHub.",
    },
    {
      title: "Why Did I Build This Project>",
      contentType: "paragraph",
      content:
        "I was curious about how to use Leaflet and Google Maps together to create a maps application to better understand what is going on under the hood. This is something I have been wanting to learn for a while and can be very useful to have in a real-world project as maps are used in many different applications. I ended up really enjoying myself and learned a lot reading through the documentation and implementing it into the app. I learn best my being hands on and building projects that interest me. I was suprised to learn that it was very use to setup the application with so much features and functionality right out of the box with leaflet and google maps API. I was able to get the app up and running in a few hours and spent the rest of the time styling the app and adding more features. I plan to continue to add more features to this app.",
    },
    {
      title: "Build Difficulties?",
      contentType: "paragraph",
      content:
        "During the initial setup developing the application, we encountered a bit of a roadblock when it came time to integrate Google Maps Layer with React-Leaflet. React-Leaflet provided clear and user-friendly documentation which made it quick and easy to implement, but there wasnt much out there when it came to implmenting Google Maps with it. To solve this issue, we dived deep into the documentation for React-leaflet , original leaflet, and google maps and stackoverflow to find a solution. After spending a bit of time reading through various resources and tinkering within our application, we came across an npm package that made the integration simple. I used the react-leaflet-google-layer package that allow us to pass in a component with our google maps API key as a prop, and placing this within our MapsContainer component to apply the google maps layer. This resolved our issue and allowed us to continue building out our application.",
    },
    {
      title: "Project Features",
      contentType: "list",
      content: [
        "Favorite Location - User can save their favorite location",
        "Suggestion Option Button - User can click a button to get a random suggestion from our available locations",
        "Ratings",
        "Dark mode / Light mode Toggle - This will also change the map theme",
      ],
    },
  ],
};

const civilienceProject: ProjectData = {
  id: 11,
  projectType: "work",
  header: "Civilience",
  subheader: "Community Health Tracker App",
  technologyList: ["React.js", "CSS", "AWS Amplify", "AWS DynamoDB", "Amplify Authentication", "Context Hooks", "Redux"],
  description:
    "As a Front-end co-team lead at Civilience, I collaborated closely with the UI/UX Design team to build a complex health tracker web application from scratch by translating Figma designs into working code. The app is intended to be used by communities across the US to help them understand their emotional health.",
  liveLinkObj: {
    buttonText: "View App",
    url: "https://www.civilience.app/",
  },
  siteLinkObj: {
    buttonText: "View Site",
    url: "https://civilience.social/solutions/",
  },
  imageList: [
    "/assets/images/Civilience_Login.png",
    "/assets/images/Civilience_FFT1.png",
    "/assets/images/Civilience_FFT7.png",
    "/assets/images/Civilience_FFT8.png",
    "/assets/images/Civilience_FFT4.png",
    "/assets/images/Civilience_FFT5.png",
  ],
  accordionList: [
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "This service helps users understand their emotional health by guiding them through a questionnaire and process screens to align their feelings and actions. It also provides community insights based on zipcode.",
    },
    {
      title: "Why Did Civilience Build This App?",
      contentType: "paragraph",
      content:
        "The Emotional Health Tracker (Feelings Flow Tracker) helps individuals and communities understand their emotional health through a daily survey that provides new vocabulary and aligns feelings and actions. It's designed to be used across the US and is part of the Civilience non-profit organization.",
    },
    {
      title: "Build Difficulties?",
      contentType: "paragraph",
      content:
        "As newcomers to AWS, we had to read a lot of documentation and research to utilize its technologies. With the help of our supervisor, we used Amplify Authenticator and DynamoDB for data storage. Despite the slow process, we created a strong foundation based on Figma Designs. As a Front-end co-team lead, I managed task delegation and task quality using previous management skills. We divided the task list according to the codebase, avoiding overlap and meeting deadlines successfully.",
    },
    {
      title: "What I learned",
      contentType: "paragraph",
      content:
        "At Civilience, I honed my team collaboration skills as a developer, working closely with UI/UX Design, Front-end, and Data Science teams on a constantly evolving app. As Frontend Co-team lead, I liaised with UI/UX leads to allocate tasks efficiently and improved my management skills. Regular cross-team meetings ensured everyone stayed aligned, addressed challenges, and shared updates. I also presented weekly front-end demos, answered questions, and assisted the UI/UX Design Team in building a mobile-friendly application by answering what is possible on the Front-end.",
    },
    {
      title: "My Contributions",
      contentType: "list",
      content: [
        "Built the foundation of the 5 Feelings Flow Questions & Summary Page as per the Figma designs",
        "Redesigned the default Amplify Authenticator design to match the provided Figma Designs",
        "Implemented modal screens for Glossary definitions",
        "Implemented user form data submission to DynamoDB",
        "Implemented React Context Hooks to work with form data",
        "Implemented the Summary Page to display all user data from the five questions",
        "Created custom data file of over 1500+ unique pieces of information to be used dynamically across the five questions",
      ],
    },
  ],
};

const manifestTechnologiesList = [
  "React.js",
  "TypeScript",
  "Styled Components",
  "Jest",
  "Playwright",
  "AWS",
  "Figma",
  "BrowserStack",
  "Sentry",
];

const manifestMainProject: ProjectData = {
  id: 12,
  projectType: "work",
  header: "Manifest - Main App",
  subheader: "Digital Transfer Solution for Retirement Accounts",
  technologyList: manifestTechnologiesList,
  description:
    "As a front-end developer at Manifest, I independently managed four front-end projects for the world's first plan-to-plan consolidation tool on the market. I did maintainence work on the main website, ensuring all information was up-to-date.",
  siteLinkObj: {
    buttonText: "View Site",
    url: "https://www.usemanifest.com/",
  },
  imageList: ["/assets/images/Manifest_Main_Homepage.png"],
  accordionList: [
    {
      title: "Why Manifest?",
      contentType: "paragraph",
      content:
        "Manifest is the world's first plan-to-plan retirement consolidation tool on the market. It allows users to consolidate their retirement accounts and manage their retirement savings in one place. Manifest is solving a large real-world problem that affects millions of Americans a year, their retirement accounts. Over 89% of people who start the 401(k) transfer process, over 89% don't finish. Manifest changes that by making the process quick and easy for individuals. I highly recommend checking out Manifest if you are looking to consolidate your retirement accounts.",
    },
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "I independently managed four front-end projects for Manifest, including the main website, participant app, employer dashboard app, and the embeddable app. The main website is generally for user information and setting up meetings with potential users interested in this great tool.",
    },
    {
      title: "What I learned",
      contentType: "paragraph",
      content:
        "In this app, I was able to learn about Mac and Windows compatibility and how to improve it while working with Jekyll. During onboarding, I realized that the app was setup for Mac OS with package updates needed to ensure a seamless experience on both operating systems. After researching the files, we found a good solution to ensure that regardless of the operating system, we would be able to get up and running quickly. In addition to updating the Mac and Windows compatibility, we also updated various links there were outdated to ensure an optimal user experience.",
    },
    {
      title: "My Contributions",
      contentType: "list",
      content: ["Updated various links.", "Improved compatibility of Mac and Windows operating systems."],
    },
  ],
};

const manifestParticipantProject: ProjectData = {
  id: 13,
  projectType: "work",
  header: "Manifest - Participant App",
  subheader: "Digital Transfer Solution for Retirement Accounts",
  technologyList: manifestTechnologiesList,
  description:
    "As a front-end developer at Manifest, I independently managed four front-end projects for the world's first plan-to-plan consolidation tool on the market. Created a custom flow for an important partner that can potentially help hundreds of thousands of employees with consolidating their retirement accounts.",
  siteLinkObj: {
    buttonText: "View Site",
    url: "https://secure.usemanifest.com/",
  },
  imageList: ["/assets/images/Manifest_Participant_Homepage.png"],
  accordionList: [
    {
      title: "Why Manifest?",
      contentType: "paragraph",
      content:
        "Manifest is the world's first plan-to-plan retirement consolidation tool on the market. It allows users to consolidate their retirement accounts and manage their retirement savings in one place. Manifest is solving a large real-world problem that affects millions of Americans a year, their retirement accounts. Over 89% of people who start the 401(k) transfer process, over 89% don't finish. Manifest changes that by making the process quick and easy for individuals. I highly recommend checking out Manifest if you are looking to consolidate your retirement accounts.",
    },
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "This app allows employers to make the process of transferring retirement accounts easy for their employees. Employers have their own custom URLs that is shared with their employees which takes them through a quick painless process to set themselves up for success in minutes.",
    },
    {
      title: "What I learned",
      contentType: "paragraph",
      content:
        "In this app, I was able to learn about Mac and Windows compatibility and how to improve it while working with Jekyll. During onboarding, I realized that the app was setup for Mac OS with package updates needed to ensure a seamless experience on both operating systems. After researching the files, we found a good solution to ensure that regardless of the operating system, we would be able to get up and running quickly. In addition to updating the Mac and Windows compatibility, we also updated various links there were outdated to ensure an optimal user experience.",
    },
    {
      title: "My Contributions",
      contentType: "list",
      content: [
        "Created a custom URL for an important partner who can potentially help hundreds of thousands of employees with consolidating their retirement accounts",
        "Created new end-to-end tests and updated previous end-to-end tests to ensure the app is working as expected.",
        "Created the custom flow for a particular partner to ensure their employees have a seamless experience.",
        "Refactored the custom partner to reduce technical debt and improve the codebase maintainability for the future.",
      ],
    },
  ],
};

const manifestEmployerDashboardProject: ProjectData = {
  id: 14,
  projectType: "work",
  header: "Manifest - Employer Dashboard App",
  subheader: "Digital Transfer Solution for Retirement Accounts",
  technologyList: manifestTechnologiesList,
  description:
    "As a front-end developer at Manifest, I independently managed four front-end projects for the world's first plan-to-plan consolidation tool on the market. The employer dashboard app is for onboarding employers to help make it easy to integrate Manifest into their organization to help their employees consolidate their retirement accounts. I made a complete overhaul on the app's UI and created a custom page for one of our important partners during my time at Manifest.",
  siteLinkObj: {
    buttonText: "View Site",
    url: "https://www.usemanifest.com/",
  },
  imageList: ["/assets/images/Manifest_Dashboard_Homepage.png"],
  accordionList: [
    {
      title: "Why Manifest?",
      contentType: "paragraph",
      content:
        "Manifest is the world's first plan-to-plan retirement consolidation tool on the market. It allows users to consolidate their retirement accounts and manage their retirement savings in one place. Manifest is solving a large real-world problem that affects millions of Americans a year, their retirement accounts. Over 89% of people who start the 401(k) transfer process, over 89% don't finish. Manifest changes that by making the process quick and easy for individuals. I highly recommend checking out Manifest if you are looking to consolidate your retirement accounts.",
    },
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "I independently managed four front-end projects for Manifest, including the main website, participant app, employer dashboard app, and the embeddable app. The main website is generally for user information and setting up meetings with potential users interested in this great tool.",
    },
    {
      title: "What I learned",
      contentType: "paragraph",
      content:
        "In this app, I was able to learn about to learn how to create a custom employer flow for a very important partner with hundreds of thousands of potential employees that could be helped. This was exciting to me as I love knowing my contributions are making a difference in someone's life. Especially with a frustrating and difficult task that millions of individuals face each and every year. After learning the codeflow and also motivation to keep pushing forward to ensure the app was working as expected.",
    },
    {
      title: "My Contributions",
      contentType: "list",
      content: [
        "Completely overhauled the app's textual information to align with the new designs and branding of the app",
        "Updated all of the app's illustrations to match the new design",
        "Created a custom page for one of our important partners",
        "Resolved bugs that affected the logic flow of the app, this improved the overall user experience",
        "Added new features such as integrating a secure 3rd party service to help users connect their retirement accounts",
        "Created a new end-to-end test for the partner page flow to ensure the app is working as expected, this was very important as we had many partners and needed to ensure they all worked after the refactor",
      ],
    },
  ],
};

const manifestEmbeddedProject: ProjectData = {
  id: 15,
  projectType: "work",
  header: "Manifest - Embedded App",
  subheader: "Digital Transfer Solution for Retirement Accounts",
  technologyList: manifestTechnologiesList,
  description:
    "As a front-end developer at Manifest, I independently managed four front-end projects for the world's first plan-to-plan consolidation tool on the market. The embedded app is an exciting way for partners to integrate Manifest into their own website to help their users consolidate their retirement accounts. This app is currently in development and is set to be released soon.",
  imageList: ["/assets/images/Manifest_Bridge_Placeholder.webp"],
  accordionList: [
    {
      title: "Why Manifest?",
      contentType: "paragraph",
      content:
        "Manifest is the world's first plan-to-plan retirement consolidation tool on the market. It allows users to consolidate their retirement accounts and manage their retirement savings in one place. Manifest is solving a large real-world problem that affects millions of Americans a year, their retirement accounts. Over 89% of people who start the 401(k) transfer process, over 89% don't finish. Manifest changes that by making the process quick and easy for individuals. I highly recommend checking out Manifest if you are looking to consolidate your retirement accounts.",
    },
    {
      title: "Project Description",
      contentType: "paragraph",
      content:
        "I independently managed four front-end projects for Manifest, including the main website, participant app, employer dashboard app, and the embeddable app. The embedded app is an exciting way for partners to integrate Manifest into their own website to help their users consolidate their retirement accounts.",
    },
    {
      title: "What I learned",
      contentType: "paragraph",
      content:
        "In this app, I was able to learn about how to create an embedded app from scratch and how to integrate it into a partner's website. This was a very exciting project as it was a new challenge for me to learn how to create an embedded app. I learned a lot while working on this project and I am excited for the future of this app as the release date is nearing. I am grateful for the opportunity to be able to work on four different applications during my time at Manifest, it has been a great learning experience by being able to immerse myself into each and every one of the applications. I am a developer that gets invested into any application I work on and I am excited to see the future of Manifest and how it will help millions of individuals. I also learned a lot from my CTO while building this application, as she was always willing to answer any questions I had and being able to learn from her was a great experience.",
    },
    {
      title: "My Contributions",
      contentType: "list",
      content: [
        "Completely updated the app's user interface to match the final designs and branding of the app provided by the design team.",
        "Updated the app's business logic to ensure the user is able to navigate between the different pages of the app with ease.",
        "Added Unit & Integration tests for various React components",
        "Updated menu navigation design and functionality to match the figma designs.",
        "Added many utility functions to help with keeping the codebase clean and maintainable for the future.",
        "Led daily standups on the progress on the front-end to ensure the team was aware of the state of the app and any blockers that needed to be resolved.",
      ],
    },
  ],
};

export const technologyIconsList = [
  { name: "React.js", iconPath: "/assets/icons/react-icon.svg" },
  { name: "Redux", iconPath: "/assets/icons/redux-icon.svg" },
  { name: "Next.js", iconPath: "/assets/icons/nextjs-icon.svg" },
  { name: "TypeScript", iconPath: "/assets/icons/typescript-icon.svg" },
  { name: "JavaScript", iconPath: "/assets/icons/javascript-icon.svg" },
  { name: "HTML5", iconPath: "/assets/icons/html5-icon.svg" },
  { name: "CSS3", iconPath: "/assets/icons/css3-icon.svg" },
  { name: "Tailwind CSS", iconPath: "/assets/icons/tailwindcss-icon.svg" },
  { name: "SCSS", iconPath: "/assets/icons/sass-icon.svg" },
  { name: "Material UI", iconPath: "/assets/icons/material-ui-icon.svg" },
  { name: "Bootstrap", iconPath: "/assets/icons/bootstrap-icon.svg" },
  { name: "Node.js", iconPath: "/assets/icons/nodejs-icon.png" },
  { name: "Express.js", iconPath: "/assets/icons/expressjs-icon.svg" },
  { name: "MongoDB", iconPath: "/assets/icons/mongodb-icon.svg" },
  { name: "Firebase", iconPath: "/assets/icons/firebase-icon.svg" },
  { name: "Vitest", iconPath: "/assets/icons/vitest-icon.svg" },
  { name: "Cypress", iconPath: "/assets/icons/cypress-icon.svg" },
  { name: "Jest", iconPath: "/assets/icons/jest-icon.svg" },
  { name: "PostgreSQL", iconPath: "/assets/icons/postgresql-icon.svg" },
  { name: "MySQL", iconPath: "/assets/icons/mysql-icon.svg" },
  { name: "Figma", iconPath: "/assets/icons/figma-icon.svg" },
  { name: "Postman", iconPath: "/assets/icons/postman-icon.svg" },
  { name: "Git", iconPath: "/assets/icons/git-icon.svg" },
  { name: "NPM", iconPath: "/assets/icons/npm-icon.svg" },
];

// Place current and new projects into this array
export const PersonalProjectList: ProjectData[] = [nextLevelProject, alphaFootwearProject, trailHawkProject];

export const WorkProjectList: ProjectData[] = [
  manifestParticipantProject,
  manifestEmployerDashboardProject,
  manifestMainProject,
  manifestEmbeddedProject,
  civilienceProject,
];
