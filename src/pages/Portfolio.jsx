import * as images from '../assets/images/index'

const projects = [
    {
      title: "Daily Blueprint",
      imageName: "dailyBlueprint",
      link: "https://github.com/sarahizar/thedailyblueprint",
    },
    {
      title: "RecipeNutri Group Project",
      imageName: "recipeNutri",
      link: "https://natemcmahon.github.io/Recipe-Nutri/",
    },
    {
      title: "WeatherWise",
      imageName: "weatherWise",
      link: "https://github.com/sarahizar/weatherwise",
    },
  ];

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <a key={index} href={project.link} className="project-link">
                        
                        <img className="project" src={images[project.imageName]}>
                        </img>
                        <div className="project-title">{project.title}</div>
                    </a>
                ))}
            </div>
        </section>
    );
}