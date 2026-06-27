import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid  ">
        <a className="navbar-brand" href="#" style={{ color: "#7c3aed" }}>
          Nishant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link  "
                href="#hero"
                onMouseEnter={(e) => (e.target.style.color = "#7C3AED")}
                onMouseLeave={(e) => (e.target.style.color = "#E8F4FD")}
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                href="#about"
                onMouseEnter={(e) => (e.target.style.color = "#7C3AED")}
                onMouseLeave={(e) => (e.target.style.color = "#E8F4FD")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  "
                href="#skills"
                onMouseEnter={(e) => (e.target.style.color = "#7C3AED")}
                onMouseLeave={(e) => (e.target.style.color = "#E8F4FD")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#project"
                onMouseEnter={(e) => (e.target.style.color = "#7C3AED")}
                onMouseLeave={(e) => (e.target.style.color = "#E8F4FD")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#contact"
                onMouseEnter={(e) => (e.target.style.color = "#7C3AED")}
                onMouseLeave={(e) => (e.target.style.color = "#E8F4FD")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a href="\public\updated_cv.pdf" target="_blank" type="button" id="btn">
          Resume
        </a>
      </div>
    </nav>
  );
}
