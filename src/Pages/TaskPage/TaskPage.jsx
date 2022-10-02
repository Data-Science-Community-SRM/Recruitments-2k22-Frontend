import React from "react";
import logo from "./img/Logo.svg";
import "./TaskPage.css";
function TaskPage(){
    const [days, setDays] = React.useState();
    const [hours, setHours] = React.useState();
    const [minutes, setMinutes] = React.useState();
    const [seconds, setSeconds] = React.useState();
    let interval;
    const startTimer = ()=>{
        const countDownDate = new Date("October 3, 2022").getTime();
        interval = setInterval(()=>{
            const currentDate = new Date().getTime();
            const distance = countDownDate - currentDate;
            const days = Math.floor(distance/86400000);
            const hours = Math.floor((distance%86400000)/3600000);
            const minutes = Math.floor((distance%3600000)/60000);
            const seconds = Math.floor((distance%60000)/1000);
            if(distance < 0){
                clearInterval(interval.current);
            }
            else{
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        });
    };
    React.useEffect(()=>{
        startTimer();
    });
    return (
        <main>
            <section>
                <h1> Welcome, User ABC </h1>
                <h3> Tech (AI/ML) </h3>
                <p><strong>These are your tasks which you need to complete </strong></p>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo qui quae ipsam a dolores laudantium aliquam, quaerat possimus harum et neque facilis, incidunt maxime vero eligendi saepe dolore. Voluptate veniam magnam odio at consectetur perspiciatis officiis facere dolorem. Veritatis, fugit? </p>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque totam doloribus, blanditiis culpa cum magnam quos eligendi ipsam consectetur delectus! </p>
                <form action="#" method="POST">
                    <div className="form-control">
                        <label for="link"> Task submission link (Github/Drive) </label>
                        <div>
                            <input type="url" name="link" id="link" />
                        </div>
                    </div>
                    <div className="clip_2">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <p className="note"> DEADLINE: {days}D:{hours}H:{minutes}M:{seconds}S </p>
            </section>
            <aside className="img-container">
                <img src={logo} alt="Data Science" />
                <article>
                    <p> Did you know: </p>
                    <p> Our Ships use ML models to navigate and find the safest route using the data of other ships which have travelled before </p>
                    <p> - Aadit Bhargava </p>
                </article>
            </aside>
    </main>
    );
};
export default TaskPage;