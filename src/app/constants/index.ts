import { ProjectData } from "../types/index";
// import "../../../public/assets/images";
// import "./assets/images";

export const NextLevelProject: ProjectData = {
  id: 1,
  header: "Next-Level Games",
  subheader: "Next.js Game Information Web Application",
  technologyList: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Postman", "Shadcn UI"],
  description:
    "Discover an expansive world of gaming with our game information web application with access to over 850,000+ games. The web application is built on Next.js with frequently updated data fetched via API from RAWG API.",
  liveURL: "https://next-level-games.netlify.app/",
  githubURL: "https://github.com/bartswierz/game-website",
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

export const AlphaFootwearProject: ProjectData = {
  id: 2,
  header: "Alpha Footwear",
  subheader: "Full-Stack E-Commerce Web Application",
  technologyList: ["React.js", "TypeScript", "Firebase", "Redux", "SCSS", "Material UI"],
  description:
    "A modern user-friendly E-commerce web application containing a wide selection of footwear. All product data and user authentication is stored on the back-end utilizing our Firebase Database. The web application is built with scalability in mind and can easily accomodate more products without further configuration.",
  liveURL: "https://alpha-footwear.netlify.app/",
  githubURL: "https://github.com/bartswierz/shopping-website",
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

// Place current and new projects into this array
export const PersonalProjectList: ProjectData[] = [
  NextLevelProject,
  AlphaFootwearProject,
  // NextLevelProject
];
