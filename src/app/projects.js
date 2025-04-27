import { WEB_MEDIA, GAME_MEDIA } from "./media.js";

export const WEB_PROJECTS = [
  {
    title: "Little Man Computer",
    description:
      "The Little Man Computer (LMC) provides a simplified model of a computer, making it an easy-to-understand teaching tool for computer science and programming students. You can access here: ",
    url: ["https://frankalcantara.com/LMC/index"],
    media: WEB_MEDIA.LMC,
    urlMsg: ["Little Man Computer"],
  },
  {
    title: "Notes",
    description:
      "A neobrutalist-style note-taking website built to learn fullstack development with React, Laravel, and PostgreSQL. Through this project, I gained experience in implementing secure API interactions, including token and cookie management, permission handling, and route protection.",
    url: [
      "https://github.com/Tuzapeno/notes-back",
      "https://github.com/Tuzapeno/notes-front",
    ],
    media: WEB_MEDIA.NOTES,
    urlMsg: ["(back end source code)", "(front end source code)"],
  },
  {
    title: "Home Automation Website",
    description:
      "A website for managing home automation by registering sensors in the rooms of a house to monitor environmental statistics. Made with Flask and SQLAlchemy ",
    url: ["https://github.com/Tuzapeno/Flask-Web-App"],
    media: WEB_MEDIA.FLASK,
    urlMsg: ["(source code)"],
  },
  {
    title: "Fridge Finesse",
    description:
      "Fridge Finess is a tool that interacts with OpenAI's ChatGPT via API to generate food recipes based on what the user has available at the moment. ",
    url: ["https://github.com/Tuzapeno/FridgeFiness"],
    media: WEB_MEDIA.FRIDGE,
    urlMsg: ["(source code)"],
  },
  {
    title: "Weather App",
    description:
      "An app to see weather information about places provided by the user using a Weather API. ",
    url: ["https://github.com/Tuzapeno/weather-report-react"],
    media: WEB_MEDIA.WEATHER,
    urlMsg: ["(source code)"],
  },
  {
    title: "Personal Youtube",
    description:
      "An app to display youtube search results via Youtube Data API v3",
    url: ["https://github.com/Tuzapeno/personalyoutube"],
    media: WEB_MEDIA.YOUTUBE,
    urlMsg: ["(source code)"],
  },
  {
    title: "Hacker Stories",
    description:
      "Simple web app to search and show articles from Hacker Stories",
    url: ["https://github.com/Tuzapeno/simple-api-react"],
    media: WEB_MEDIA.SIMPLE,
    urlMsg: ["(source code)"],
  },
];

export const GAME_PROJECTS = [
  {
    title: "Nuclear Clone",
    description:
      "Copy of the game Nuclear Throne by Vambleer made for learning purposes using the Godot Engine",
    media: GAME_MEDIA.NUCLEAR,
  },
  {
    title: "Boolet",
    description:
      "An incomplete rogue-like cave exploration game developed using Gamemaker Studio 2",
    media: GAME_MEDIA.BOOLET,
  },
  {
    title: "Rabbit Hole",
    description:
      "Game made during the Global Game Jam 2023 with Gamemaker Studio 2. In this game you control a rabbit and need to get as far as you can by traveling to the center of the Earth. ",
    theme: "Roots",
    media: GAME_MEDIA.RABBIT,
    media: GAME_MEDIA.RABBIT,
    url: ["https://github.com/ViniTeider/Rabbit_Hole"],
    urlMsg: ["(source code)"],
  },
  {
    title: "Goofy Glory",
    description:
      "Game made during the Global Game Jam 2024 with Gamemaker Studio 2. You play locally with a friend by being Jesters that need to entertain the king by hitting each other with props! ",
    theme: "Make me Laugh",
    media: GAME_MEDIA.GOOFY,
    media: GAME_MEDIA.GOOFY,
    url: ["https://github.com/ViniTeider/Goofy-Glory"],
    urlMsg: ["(source code)"],
  },
  {
    title: "Nica's Bubble Tea",
    description:
      "Game made during the Global Game Jam 2025 with Godot Engine. A game about competing with your friend to see who pops more bubbles faster! You can play locally with a friend by downloading at: ",
    theme: "Bubbles",
    media: GAME_MEDIA.BUBBLE,
    url: ["https://github.com/ViniTeider/Nica-s-BubbleTea/releases/tag/v1.0.0"],
    urlMsg: ["Nica's Bubble Tea"],
  },
];
