import React from "react";
import logo from "./img/Logo.svg";
import "./WelcomePage.css";
function WelcomePage() {
  const [subDomain, setSubDomain] = React.useState("");
  return (
    <div className="welcome">
      <main className="welcome">
        <section className="welcome w3lc0m3">
          <h1> Welcome, User ABC </h1>
          <p> You have selected Tech/// please select your subdomain </p>
          <form action="/task" className="welcome" method="GET">
            <div className="welcome-clip_2">
              <input
                type="submit"
                value="AI/ML"
                onClick={() => {
                  setSubDomain("AI/ML");
                }}
              />
            </div>
            <div className="welcome-clip_2">
              <input
                type="submit"
                value="Blockchain"
                onClick={() => {
                  setSubDomain("Blockchain");
                }}
              />
            </div>
            <div className="welcome-clip_2">
              <input
                type="submit"
                value="Web Dev"
                onclick={() => {
                  setSubDomain("Web Dev");
                }}
              />
            </div>
          </form>
          <p className="welcome-note">
            {" "}
            *you can't change your sub-domain after selecting{" "}
          </p>
        </section>
        <aside className="img-container">
          <img src={logo} alt="Data Science" />
        </aside>
      </main>
    </div>
  );
}
export default WelcomePage;
