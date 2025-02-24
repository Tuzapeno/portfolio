import Introduction from "./introduction/introduction";
import About from "./about/about";
import CustomIntro from "./custom-into/customIntro";
import Project from "./project-showcase/projectShowcase";
import Footer from "./footer/footer";

// Webdev items
const fridgeItems = [
	"./FridgeFinesse/fridge1.png",
	"./FridgeFinesse/fridge2.png",
];
const flaskItems = ["./Flaskapp/flask1.png", "./Flaskapp/flask2.png"];
const lmcItems = ["./LMC/lmc1.png", "./LMC/lmcgif.gif"];
const simpleItems = [
	"./SimpleApp/simplereact1.png",
	"./SimpleApp/simplereact2.png",
];
const weatherItems = [
	"./WeatherApp/weather1.png",
	"./WeatherApp/weathergif.gif",
];

const youtubeItems = [
	"./Youtube/youtube1.png",
	"./Youtube/youtube2.png",
	"./Youtube/youtubegif.gif",
];

// Gamedev items
const nuclearCloneItems = [
	"./NuclearClone/nuclear1.png",
	"./NuclearClone/nuclear2.png",
	"./NuclearClone/nuclear3.png",
	"./NuclearClone/nuclear4.png",
];
const booletItems = [
	"./Boolet/boolet1.png",
	"./Boolet/booletgif.gif",
	"./Boolet/booletgif2.gif",
];

// Gamejam items
const rabbitItems = ["./Rabbithole/rabbit1.png", "./Rabbithole/rabbit2.png"];
const goofyItems = [
	"./Goofy/goofy1.jpg",
	"./Goofy/goofy2.png",
	"./Goofy/goofy3.png",
];
const bubbleItems = ["./Bubbletea/bubble1.png", "./Bubbletea/bubblegif.gif"];

// Lista com os dados de cada projeto
const projects = [
	{
		category: "Web",
		title: "Little Man Computer",
		description:
			"The Little Man Computer (LMC) provides a simplified model of a computer, making it an easy-to-understand teaching tool for computer science and programming students. You can access here: ",
		urlMsg: "Little Man Computer",
		url: "https://frankalcantara.com/LMC/index",
		media: lmcItems,
	},
	{
		category: "Web",
		title: "Home Automation Website",
		description:
			"A website for managing home automation by registering sensors in the rooms of a house to monitor environmental statistics. Made with Flask and SQLAlchemy ",
		media: flaskItems,
		url: "https://github.com/Tuzapeno/Flask-Web-App",
		urlMsg: "(source code)",
	},
	{
		category: "Web",
		title: "Fridge Finesse",
		description:
			"Fridge Finess is a tool that interacts with OpenAI's ChatGPT via API to generate food recipes based on what the user has available at the moment. ",
		media: fridgeItems,
		url: "https://github.com/Tuzapeno/FridgeFiness",
		urlMsg: "(source code)",
	},
	{
		category: "Game",
		title: "Nuclear Clone",
		description:
			"Copy of the game Nuclear Throne by Vambleer made for learning purposes using the Godot Engine",
		media: nuclearCloneItems,
	},
	{
		category: "Game",
		title: "Boolet",
		description:
			"An incomplete rogue-like cave exploration game developed using Gamemaker Studio 2",
		media: booletItems,
	},
	{
		category: "Game",
		title: "Rabbit Hole",
		description:
			"Game made during the Global Game Jam 2023 with Gamemaker Studio 2. In this game you control a rabbit and need to get as far as you can by traveling to the center of the Earth. ",
		theme: "Roots",
		media: rabbitItems,
		url: "https://github.com/ViniTeider/Rabbit_Hole",
		urlMsg: "(source code)",
	},
	{
		category: "Game",
		title: "Goofy Glory",
		description:
			"Game made during the Global Game Jam 2024 with Gamemaker Studio 2. You play locally with a friend by being Jesters that need to entertain the king by hitting each other with props! ",
		theme: "Make me Laugh",
		media: goofyItems,
		url: "https://github.com/ViniTeider/Goofy-Glory",
		urlMsg: "(source code)",
	},
	{
		category: "Game",
		title: "Nica's Bubble Tea",
		description:
			"Game made during the Global Game Jam 2025 with Godot Engine. A game about competing with your friend to see who pops more bubbles faster! You can play locally with a friend by downloading at: ",
		theme: "Bubbles",
		media: bubbleItems,
		url: "https://github.com/ViniTeider/Nica-s-BubbleTea/releases/tag/v1.0.0",
		urlMsg: "Nica's Bubble Tea",
	},
	{
		category: "Web",
		title: "Weather App",
		description:
			"An app to see weather information about places provided by the user using a Weather API. ",
		theme: "",
		media: weatherItems,
		url: "https://github.com/Tuzapeno/weather-report-react",
		urlMsg: "(source code)",
	},
	{
		category: "Web",
		title: "Personal Youtube",
		description:
			"An app to display youtube search results via Youtube Data API v3",
		theme: "",
		media: youtubeItems,
		url: "https://github.com/Tuzapeno/personalyoutube",
		urlMsg: "(source code)",
	},
	{
		category: "Web",
		title: "Hacker Stories",
		description:
			"Simple web app to search and show articles from Hacker Stories",
		theme: "",
		media: simpleItems,
		url: "https://github.com/Tuzapeno/simple-api-react",
		urlMsg: "(source code)",
	},
];

export default function Home() {
	// Separa os projetos por categoria
	const webProjects = projects.filter(
		(project) => project.category === "Web"
	);
	const gameProjects = projects.filter(
		(project) => project.category === "Game"
	);

	return (
		<div>
			<Introduction />
			<About />

			<CustomIntro highlight="Web" content=" Development" />
			{webProjects.map((project, index) => (
				<Project key={index} {...project} />
			))}

			<CustomIntro
				highlight="Game"
				highlightColor="text-red-400"
				content=" Development"
			/>
			{gameProjects.map((project, index) => (
				<Project urlColor="red" key={index} {...project} />
			))}

			<Footer />
		</div>
	);
}
