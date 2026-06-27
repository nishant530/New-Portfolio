import "../styles/section_css/Contact.css";
export default function Contact() {
  return (
    <div className="container-fluid contact p-5 m-3" id="contact">
      <h1>Let's build something together</h1>
      <p>
        Open to internships, freelance work, and hackathon collabs. I actually
        reply — let's talk!
      </p>
      <a
        type="button"
        className="btn btn-outline-info mb-3"
        href="https://mail.google.com/mail/?view=cm&to=ns5499941@gmail.com"
      >
        Send an Email
      </a>
      <br />
      <i>Connect with me on : </i>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://github.com/nishant530">
        <i className="fa-brands fa-github"></i> Github
      </a>
      &nbsp; &nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/nishant-soni-b7590032a/">
        <i className="fa-brands fa-linkedin"></i> LinkedIn
      </a>
    </div>
  );
}
