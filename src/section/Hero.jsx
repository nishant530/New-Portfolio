import "../styles/section_css/Hero.css";

export default function Hero() {
  return (
    <div className="container-fluid hero p-5" id="hero">
      <div className="row">
        <div className="col">
          <p id="greeting">Hii, I'm</p>
          <h1 id="name">
            NISHANT SONI
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: "normal",
                color: "rgb(224, 224, 89)",
                verticalAlign: "baseline",
              }}
            >
              {" "}
              <i>- Building AI-Powered MERN Stack Solutions</i>
            </span>
          </h1>
          <p id="description">
            I'm a 3rd year B.Tech student in CSE(specialization in IoT) branch
            at PIET , Jaipur . Building real-world full stack projects.
            Currently targeting for internships and freelancing . Everyday
            explorer of AI ,that how can i integrate AI in the projects.
          </p>
          <p id="attitude_line">
            I don't limit myself to one domain — my skillset evolves every
            single day.
          </p>
          <div className="general_info">
            <button className="btn btn-outline-info ">
              <a
                href="#project"
                style={{ textDecoration: "none", color: "#e8f4fd" }}
              >
                View Projects
              </a>
            </button>
            <button className="btn btn-outline-info">
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "#e8f4fd" }}
              >
                My contacts
              </a>
            </button>
          </div>
        </div>
        <div className="col">
          <img src="\hero_section.avif" alt="heroimage" id="heroImg" />
        </div>
      </div>
    </div>
  );
}
