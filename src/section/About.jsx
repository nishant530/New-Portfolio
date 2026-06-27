import "../styles/section_css/About.css";
export default function About() {
  return (
    <div className="container-fluid about p-5 mt-3" id="about">
      <div className="row">
        <div className="col">
          <img src="public\about_image.svg" alt="about image" id="aboutImg" />
        </div>
        <div className="col">
          <p>
            <i>Who I am</i>
          </p>
          <p id="story">
            <i>
              "I started coding in my second semester, and honestly — I had no
              idea where to begin. I jumped between C, Python, Java, and many
              more languages, but looking back, that confusion gave me something
              valuable: a real understanding of what coding is and how beautiful
              it can be. Today I'm consistent with C++ and DSA, and my curiosity
              about how websites work turned me into a MERN Stack developer.
              I've already delivered a freelance project for a real client — and
              I'm not stopping here. Next.js, React, and AI integration are on
              my radar. One thing I always remind myself —<br />
              <b>
                All powers are within you, you can do anything and everything.
              </b>
            </i>
          </p>
          <div>
            <span>Location</span>&nbsp;&nbsp;&nbsp;
            <span>Rajasthan,India</span>
          </div>
          <div>
            <span>College</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>PIET ,Jaipur</span>
          </div>
          <div>
            <span>Status</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Open to Internship</span>
          </div>
          <div>
            <span>CGPA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>8.5+ Maintained</span>
          </div>
        </div>
      </div>
    </div>
  );
}
