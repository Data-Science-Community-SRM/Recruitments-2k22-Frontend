import React from "react";
import "./RegisterPage.css";
import technical from "./img/Technical.png";
import corporate from "./img/Corporate.png";
import creatives from "./img/Creatives.png";
function RegisterPage(){
    const [shipLabel, setShipLabel] = React.useState("Tech///");
    const [ship, setShip] = React.useState(technical);
    const changeShip = (label, type) => {
        setShipLabel(label);
        setShip(type);
    }
    return (
        <div className="register">
            <header className="register">
                <div></div>
                <h1> Register </h1>
                <p> In DS community we can hear you code 🚀</p>
            </header>
            <main className="register">
                <form action="#" method="POST" className="register">
                    <div class="register-form-control">
                        <label for="name"> Full name </label>
                        <div>
                            <input type="text" name="name" id="name" placeholder="John Doe" />
                        </div>
                    </div>
                    <div class="register-form-control">
                        <label for="email"> Email </label>
                        <div>
                            <input type="email" name="email" id="email" placeholder="xyz@srmist.edu.in" />
                        </div>
                    </div>
                    <div class="register-form-control">
                        <label for="description"> A little about yourself </label>
                        <div class="Textarea">
                            <textarea name="description" id="description" rows="40" cols="30"></textarea>
                        </div>
                    </div>
                    <div class="register-form-control">
                        <label for="github"> Github </label>
                        <div>
                            <input type="url" name="github" id="github" placeholder="https://github.com/..." />
                        </div>
                    </div>
                    <div class="register-form-control">
                        <label for="linkedin"> LinkedIn </label>
                        <div>
                            <input type="url" name="linkedin" id="linkedin" placeholder="https://www.linkedin.com/..." />
                        </div>
                    </div>
                    <div class="register-form-control">
                        <label for="password"> Password </label>
                        <div>
                            <input type="password" name="password" id="password" />
                        </div>
                    </div>
                    <div class="register-form-control">
                        <label for="confirm-password"> Confirm Password </label>
                        <div>
                            <input type="password" name="password" id="confirm-password" />
                        </div>
                    </div>
                    <div class="domain">
                        <p> Select the domain you want to apply for </p>
                        <div id="img-container">
                            <label for="ship" id="ship-label"> {shipLabel} </label>
                            <img src={ship} alt="Ship" id="ship" />
                        </div>
                        <div class="choose-domain">
                            <div class="register-form-control">
                                <input type="radio" name="domain" id="technical" onFocus={()=>{changeShip("Tech///", technical)}}/>
                                <label for="technical"> Tech </label>
                            </div>
                            <div class="register-form-control">
                                <input type="radio" name="domain" id="corporate" onFocus={()=>{changeShip("Corpo//", corporate)}}/> 
                                <label for="corporate"> Corpo </label>
                            </div>
                            <div class="register-form-control">
                                <input type="radio" name="domain" id="creatives" onFocus={()=>{changeShip("Creatives/", creatives)}}/>
                                <label for="creatives"> Creatives </label>
                            </div>
                        </div>
                    </div>
                    <div class="clip_2">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </main>
        </div>
    )
}
export default RegisterPage;