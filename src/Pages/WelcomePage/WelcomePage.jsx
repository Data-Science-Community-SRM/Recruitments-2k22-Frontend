import React from "react";
import logo from "./img/Logo.svg";
import "./WelcomePage.css";
function WelcomePage(){
    const [subDomain, setSubDomain] = React.useState('');
    return (
        <main>
            <section>
                <h1> Welcome, User ABC </h1>
                <p> You have selected Tech/// please select your subdomain </p>
                <form action="#">
                    <input type="hidden" name="subDomain" id="sub-domain" value={subDomain} />
                    <div className="clip_2">
                        <input type="submit" value="AI/ML" onClick={()=>{setSubDomain("AI/ML")}} />
                    </div>
                    <div className="clip_2">
                        <input type="submit" value="Blockchain" onClick={()=>{setSubDomain("Blockchain")}} />
                    </div>
                    <div className="clip_2">
                        <input type="submit" value="Web Dev" onclick={()=>{setSubDomain("Web Development")}} />
                    </div>
                </form>
                <p className="note"> *you can't change your sub-domain after selecting </p>
            </section>
            <aside className="img-container">
                <img src={logo} alt="Data Science" />
            </aside>
        </main>
    )
}
export default WelcomePage;