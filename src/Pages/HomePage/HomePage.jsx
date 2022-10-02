import React from "react";
import "./HomePage.css";
import Clock from "./Clock";
import Modal from "./Modal"
import logo from "./img/Logo.svg"
const HomePage = () => {
    const [openModal, setOpenModal] = React.useState(false);
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
        <div>
        <main>
            <nav>
                <img src={logo} alt="Data Science Logo" className="Logo" />
                <div className="clip_1">
                    <button onClick={()=>{setOpenModal(true)}}> Sign In </button>
                </div>       
            </nav>
            <section className="landing">
                <h1> Recruitments 2K22 </h1>
                <Clock 
                    days={days} 
                    hours={hours} 
                    minutes={minutes} 
                    seconds={seconds}
                />
                <div className="clip_2">
                    <a href="/register"> Register </a>
                </div>
            </section>
            {openModal && <div id="modal_blur"></div>}
        </main>
        
        {openModal && <Modal closeModal={setOpenModal} />}
        </div>
    );
};

export default HomePage;
