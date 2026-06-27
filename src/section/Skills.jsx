import "../styles/section_css/Skills.css";
export default function Skills() {
  return (
    <div className="container-fluid skills p-5 mt-3" id="skills">
      <h1 className="mb-3">What I Work With</h1>
      <div className="skill-category">
        <h3>Frontend</h3>
        <div className="skill-pills">
          <span>React.js</span>
          <span>HTML5</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend</h3>
        <div className="skill-pills">
          <span>Node</span>
          <span>Express.js</span>
          <span>EJS</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Database</h3>
        <div className="skill-pills">
          <span>MongoDB</span>
          <span>MySQL</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Tools</h3>
        <div className="skill-pills">
          <span>VS code editor</span>
          <span>Git and Github</span>
          <span>MongoDB compass</span>
          <span>Postman</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Languages</h3>
        <div className="skill-pills">
          <span>C++</span>
          <span>JavaScript</span>
          <span>Java</span>
        </div>
      </div>
    </div>
  );
}
