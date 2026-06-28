import ProjectCard from "../components/ProjectCard";
import "../styles/section_css/Project.css";
import { data } from "../data/projectData";
export default function Project() {
  return (
    <div className="container-fluid project p-5 mt-3" id="project">
      <div className="row">
        <div className="col">
          <h1>Things I've Built - My Projects</h1>
          <p>
            <i>
              Real projects — not just tutorials. Each one taught me something
              new.
            </i>
          </p>
          <div
            className="myprojects mt-5 col"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {data.map((obj) => (
              <ProjectCard
                title={obj.title}
                description={obj.description}
                techStack={obj.techStack}
                key={obj.idx}
              />
            ))}
          </div>
          <a
            href="https://github.com/nishant530/"
            className="btn  m-5"
            style={{ background: "#7c3aed", color: "#e8f4fd" }}
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
