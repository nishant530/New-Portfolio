import "./ProjectCard.css";
export default function ProjectCard({ title, description, techStack }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <i className="fa-brands fa-phabricator"></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ul>
          {techStack.map((listitem) => (
            <li key={listitem}>{listitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
