import { ProjectData } from "../types/index";

export const NextLevelProject: ProjectData = {
  title: "Next-Level Games",
  subtitle: "Next.js Game Information Web Application",
  technologyList: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Postman", "Shadcn UI"],
  description:
    "Discover an expansive world of gaming with our game information web application with access to over 850,000+ games. The web application is built on Next.js with frequently updated data fetched via API from RAWG API.",
  liveURL: {
    url: "https://next-level-games.netlify.app/",
    // text: ""
  },
  githubURL: {
    url: "https://github.com/bartswierz/game-website",
    // text: ""
  },
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

// Place current and new projects into this array
export const ProjectList: ProjectData[] = [
  NextLevelProject,
  // NextLevelProject
];
