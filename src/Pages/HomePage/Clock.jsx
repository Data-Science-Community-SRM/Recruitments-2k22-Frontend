import React, {Fragment} from "react";
import "./HomePage.css";
function Clock({days, hours, minutes, seconds}){
    return (
        <Fragment>
            <section className="timer-container">
                <p>Launch In</p>
                <section className="timer">
                    <div className="clock">
                        <section>
                            <p>{days}</p>
                            <small>D</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{hours}</p>
                            <small>H</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{minutes}</p>
                            <small>M</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{seconds}</p>
                            <small>S</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    );
};
Clock.defaultProps={
    days: 10,
    hours: 10,
    minutes: 10,
    seconds: 10,
}
export default Clock;