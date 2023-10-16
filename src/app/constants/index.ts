import { ProjectData } from "../types/index";
// import "../../../public/assets/images";
// import "../public/assets/images";
// import "./assets/images";

const nextLevelProject: ProjectData = {
  id: 1,
  header: "Next-Level Games",
  subheader: "Next.js Game Information Web Application",
  technologyList: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Postman", "Shadcn UI"],
  description:
    "Discover an expansive world of gaming with our game information web application with access to over 850,000+ games. The web application is built on Next.js with frequently updated data fetched via API from RAWG API.",
  liveURL: "https://next-level-games.netlify.app/",
  githubURL: "https://github.com/bartswierz/game-website",
  // imageList: ["./public/assets/NLG-browse-genre.png"],
  image: "/assets/NLG-browse-genre.png",
  accordionObj: {
    description:
      "Next-Level Games is a game information web application similar to Steam that allows vistors to browse through virtually all available games in the world surpassing over 850,000+ games that are frequently updated by RAWG API. Data is accessed through using RAWG API's API. Vistors can directly search for games or browse through the various genres and platforms. The web application is built with Next.js, TypeScript, Tailwind CSS, and Shadcn. Building the app required extensively reading through RAWG API Documentation along with Postman to test fetch calls as there were many kinds of calls and query parameters for all kinds of game data. The web application is deployed on Netlify and the code is hosted on GitHub.",
    reason:
      "I built this project to challenge my learning of Next.js by creating an app that required heavy use of dyanmic routing and API calls to fetch large data with minimal hard coding. I also wanted to improve upon my Tailwind CSS knowledge which meshes extremely well with Next.js. This was also an app I always wanted to build as one of my favorite childhood past time was video games, now that I am older, I don't have much free time so this was a great way to get childhood nostalgia and truly enjoy building this app. I wanted to also really challenge myself and use a large dataset to fetch from, which led me to research RAWG API which gave developers access to over 850,000+ games of data. I also wanted to focus on data that would require focusing on reading documentation which is more inline to how real world projects work. The RAWG API documentation was written beautifully and very organized that made the process of testing their API calls a painless process in Postman. The fetch calls were humongous which required extensive use of Postman to test and understand the data that was received. Postman was invaluable in helping me understand how to structure the project.",
    difficulties:
      "The difficulty with this project came down to learning new technologies such as Next.js, Tailwind CSS, and understanding how to use RAWG API within Postman by reading through documentation. The first few days were spent reading through Next.js docs, RAWG API docs, Tailwind CSS docs and building API call functions in our utilities directory to prepare on rendering game data. There was many different kinds of API fetches offered by RAWG API that it made it very important to take the time to organize our app early on which paid off tenfold as the app grew. Once I familarized myself with Next.js file structure and best practices with Next.js version 13.4.8+, I was able to slowly get progress by building out the basic layout structure of the app. This allowed us to get up and running and starting testing our API calls, and building out our components and pages with Tailwind CSS. My main difficulty came down to how I could render dyanmic pages with our sidebar navigation due to needing to figure out a way to display all game data based on platforms, genres, stores, and developers. A large chunk of time was spent on our sidebar fleshing out our layout to be responsive and also ensure each sidebar link worked correctly to dynamically route the user by figuring out which parameters the RAWG API required to fetch the correct data. Another difficulty was figuring out how to build our own sidebar that required some use of Redux to store our state(is the sidebar open & toggle state) and useEffects to track screen window width to open or close the sidebar automatically depending on if the user is on mobile or desktop.",
    learned: "Learned Placeholder",
    // contributions: []
    features: [
      "Implement Game Rating Data",
      "Implement Game Achievements Data",
      "Implement User Login & Authentication",
      "Implement Advanced Game Search with Combobox for Search Filters",
    ],
  },
};

const alphaFootwearProject: ProjectData = {
  id: 2,
  header: "Alpha Footwear",
  subheader: "Full-Stack E-Commerce Web Application",
  technologyList: ["React.js", "TypeScript", "Firebase", "Redux", "SCSS", "Material UI"],
  description:
    "A modern user-friendly E-commerce web application containing a wide selection of footwear. All product data and user authentication is stored on the back-end utilizing our Firebase Database. The web application is built with scalability in mind and can easily accomodate more products without further configuration.",
  liveURL: "https://alpha-footwear.netlify.app/",
  githubURL: "https://github.com/bartswierz/shopping-website",
  image: "/assets/alpha-footwear-product.png",
  accordionObj: {
    description:
      "Alpha Footwear is the solution for getting top quality footwear without breaking the bank. Customers will enjoy and appreciate a minimalist layout without overwhelming distractions cluttering the screen. The user experience was the push for keeping the layout as minimal as possible without compromising other sections.",
    reason:
      "I built this project to challenge myself by creating a large e-commerce app. My previous project(Bots-for-hire) helped get a basic understanding of React which allowed me to set the bar higher this time around and push myself to create a scalable React App. Going into the project, I have planned to update this project as I learn new technologies. I built the majority of my app quickly within a span of two-three weeks before starting my Frontend Internship in January(2023). Since then I have been learning TypeScript and Material UI which have been really enjoyable to learn. I have grown to love TypeScript after a short period of time and while I am still learning, I plan to use TypeScript for all my future projects because of how helpful it has been to help catch and prevent difficult bugs during development.",
    difficulties:
      "The difficultly with this project came down to learning new technologies and implementing them as I improved. I built this project shortly after completing my React Udemy course and tested myself by putting everything I had learned to use. Learning multiple technologies at once made it a bit more difficult requiring reading a lot of documentation but it turned out to be enjoyable and very beneficial. I learned more about Firebase, Material UI, and recently, TypeScript. Implementing TypeScript into my application after already doing the majority of it with JavaScript proved to have its challenges as the change gave me many errors upon changing. However, learning the basics first helped me resolve my errors and turned out to be enjoyable converting my project. What really helped me was using my previous classroom experience working with Java. Java being a strongly typed language, made learning the syntax of TypeScript easier to understand. Overall, I enjoyed using TypeScript and plan to use it for all my future projects because of how useful it can be during development and refactoring code.",
    learned: "Learned Placeholder",
    // contributions: []
    features: [
      "Update Product Card Mobile Design",
      "Flesh out the Shipping/Checkout section",
      "Update Size and Color Select in Product Card",
      "Add Unit Tests using Jest",
    ],
  },
};

const trailHawkProject: ProjectData = {
  id: 3,
  header: "Trailhawk",
  subheader: "Hiking & State Park Map App",
  technologyList: ["React.js", "Tailwind CSS", "React-leaflet", "Google Maps API"],
  description:
    "If youre an avid hiker or just looking for a new adventure, Trailhawk is the perfect app for you. Trailhawk lets you discover the best of the U.S. State Parks and National Parks. From casual hiking trails to treks spanning over 2000 miles, Trailhawk has you covered.",
  liveURL: "https://trailhawk.netlify.app/",
  githubURL: "https://github.com/bartswierz/map-search",
  image: "/assets/trailhawk_search.png",
  accordionObj: {
    description:
      "This Trailhawk web application is a map app built using React, Tailwind CSS, React-Leaflet, and Google Maps API. The app allows users to search for hiking trails and state parks in the United States with an autocomplete matching user input by filtering through our current 27 locations across the United States. The app is built with scalability in mind and can easily accomodate more data without further configuration. The app is deployed on Netlify and the code is hosted on GitHub.",
    reason:
      "I was curious about how to use Leaflet and Google Maps together to create a maps application to better understand what is going on under the hood. This is something I have been wanting to learn for a while and can be very useful to have in a real-world project as maps are used in many different applications. I ended up really enjoying myself and learned a lot reading through the documentation and implementing it into the app. I learn best my being hands on and building projects that interest me. I was suprised to learn that it was very use to setup the application with so much features and functionality right out of the box with leaflet and google maps API. I was able to get the app up and running in a few hours and spent the rest of the time styling the app and adding more features. I plan to continue to add more features to this app.",
    difficulties:
      "During the initial setup developing the application, we encountered a bit of a roadblock when it came time to integrate Google Maps Layer with React-Leaflet. React-Leaflet provided clear and user-friendly documentation which made it quick and easy to implement, but there wasnt much out there when it came to implmenting Google Maps with it. To solve this issue, we dived deep into the documentation for React-leaflet , original leaflet, and google maps and stackoverflow to find a solution. After spending a bit of time reading through various resources and tinkering within our application, we came across an npm package that made the integration simple. I used the react-leaflet-google-layer package that allow us to pass in a component with our google maps API key as a prop, and placing this within our MapsContainer component to apply the google maps layer. This resolved our issue and allowed us to continue building out our application.",
    // learned: string,
    // contributions?: string[]; // for work projects
    features: [
      "Favorite Location - User can save their favorite location",
      "Suggestion Option Button - User can click a button to get a random suggestion from our available locations",
      "Ratings",
      "Dark mode / Light mode Toggle - This will also change the map theme",
    ], // for personal projects
  },
};

const polarisProject: ProjectData = {
  id: 4,
  header: "Polaris",
  subheader: "MERN Stack - Employee Database Management App",
  technologyList: ["React.js", "Node.js", "Express.js", "MongoDB", "SCSS", "Material UI"],
  description:
    'MERN stack application containing employee record data with CRUD functionality. If you would like to run the application, please navigate to my github repository using the button below and read the "Getting Started" section of the documentation to set up your very own MongoDB and local environment!',
  // liveURL: "",
  githubURL: "https://github.com/bartswierz/employee-records",
  image: "/assets/PolarisIntro.png",
  // image: "/assets/PolarisEditScreen.png",
  accordionObj: {
    description:
      "The Polaris application is database management system built using the MERN stack (MongoDB, Express.js, Node.js, and React) that provides comprehensive CRUD (Create, Read, Update, Delete) functionality for managing employee data. My MERN stack application features a captivating space theme that adds an immersive and visually stunning experience for users. The highlight of this theme is an animated star background that gracefully traverses across the screen, creating a sense of movement and depth reminiscent of a space voyage.",
    reason:
      "I embarked on building this project with the primary goal of enhancing my skills and gaining hands-on experience with the MERN stack (MongoDB, Express.js, Node.js, and React). While I already had a solid understanding of React on the frontend, I recognized the importance of becoming well-rounded and proficient in backend development as well. This project provided the perfect opportunity to dive into backend technologies and become a stronger and more versatile developer overall.",
    difficulties:
      "As a front-end developer transitioning to full-stack development, my main challenge in building my MERN stack application was mastering Node.js and Express.js. Initially, understanding how to effectively setup the server side of the project proved to be the most difficult aspect. Debugging my server-side code took up a significant portion of the project's development phase. However, through dedicated research and experimentation, I gradually gained proficiency in debugging techniques, which led to a breakthrough. Over time, things started to click, and I found myself genuinely enjoying the process. Once the server-side foundation was established, the remainder of the project became more manageable, allowing me to focus on other aspects of development.",
    features: [
      "Implement an ordering option based on Position, Level, or Salary",
      "Implement a raise button using a percentage of the current salary",
    ], // for personal projects
  },
};

const civilienceProject: ProjectData = {
  id: 11,
  header: "Civilience",
  subheader: "Community Health Tracker App",
  technologyList: ["React.js", "CSS", "AWS Amplify", "AWS DynamoDB", "Amplify Authentication", "Context Hooks", "Redux"],
  description:
    "As a Front-end co-team lead at Civilience, I collaborated closely with the UI/UX Design team to build a complex health tracker web application from scratch by translating Figma designs into working code. The app is intended to be used by communities across the US to help them understand their emotional health.",
  // To see the app, click "View App" below, sign up, and then click the "Learn More" button within the Emotional Health tab.',
  liveURL: "https://www.civilience.app/",
  githubURL: "https://civilience.social/solutions/",
  // image: "/assets/NLG-browse-genre.png",
  image: "/assets/civ-login-screen-new.png",
  accordionObj: {
    description:
      "This service helps users understand their emotional health by guiding them through a questionnaire and process screens to align their feelings and actions. It also provides community insights based on zipcode.",
    reason:
      "The Emotional Health Tracker (Feelings Flow Tracker) helps individuals and communities understand their emotional health through a daily survey that provides new vocabulary and aligns feelings and actions. It's designed to be used across the US and is part of the Civilience non-profit organization.",
    difficulties:
      "As newcomers to AWS, we had to read a lot of documentation and research to utilize its technologies. With the help of our supervisor, we used Amplify Authenticator and DynamoDB for data storage. Despite the slow process, we created a strong foundation based on Figma Designs. As a Front-end co-team lead, I managed task delegation and task quality using previous management skills. We divided the task list according to the codebase, avoiding overlap and meeting deadlines successfully.",
    learned:
      "At Civilience, I honed my team collaboration skills as a developer, working closely with UI/UX Design, Front-end, and Data Science teams on a constantly evolving app. As Frontend Co-team lead, I liaised with UI/UX leads to allocate tasks efficiently and improved my management skills. Regular cross-team meetings ensured everyone stayed aligned, addressed challenges, and shared updates. I also presented weekly front-end demos, answered questions, and assisted the UI/UX Design Team in building a mobile-friendly application by answering what is possible on the Front-end.",
    contributions: [
      "Built the foundation of the 5 Feelings Flow Questions & Summary Page as per the Figma designs",
      "Redesigned the default Amplify Authenticator design to match the provided Figma Designs",
      "Implemented modal screens for Glossary definitions",
      "Implemented user form data submission to DynamoDB",
      "Implemented React Context Hooks to work with form data",
      "Implemented the Summary Page to display all user data from the five questions",
      "Created custom data file of over 1500+ unique pieces of information to be used dynamically across the five questions",
    ], // for work projects
  },
};

// Place current and new projects into this array
export const PersonalProjectList: ProjectData[] = [
  // civilienceProject,
  nextLevelProject,
  alphaFootwearProject,
  trailHawkProject,
  polarisProject,
];

export const technologyIconsList = [
  { name: "JavaScript", iconPath: "/assets/javascript-icon.svg" },
  { name: "TypeScript", iconPath: "/assets/typescript-icon.svg" },
  { name: "HTML5", iconPath: "/assets/html5-icon.svg" },
  { name: "CSS3", iconPath: "/assets/css3-icon.svg" },
  { name: "React.js", iconPath: "/assets/react-icon.svg" },
  { name: "Redux", iconPath: "/assets/redux-icon.svg" },
  { name: "Next.js", iconPath: "/assets/nextjs-icon.svg" },
  { name: "Tailwind CSS", iconPath: "/assets/tailwindcss-icon.svg" },
  { name: "SCSS", iconPath: "/assets/sass-icon.svg" },
  { name: "Material UI", iconPath: "/assets/material-ui-icon.svg" },
  { name: "Bootstrap", iconPath: "/assets/bootstrap-icon.svg" },
  { name: "Node.js", iconPath: "/assets/nodejs-icon.png" },
  { name: "Express.js", iconPath: "/assets/expressjs-icon.svg" },
  { name: "MongoDB", iconPath: "/assets/mongodb-icon.svg" },
  { name: "Firebase", iconPath: "/assets/firebase-icon.svg" },
  { name: "Postman", iconPath: "/assets/postman-icon.svg" },
  { name: "Git", iconPath: "/assets/git-icon.svg" },
  { name: "NPM", iconPath: "/assets/npm-icon.svg" },
];

export const WorkProjectList: ProjectData[] = [civilienceProject];
