import React from "react";
import "./HomePage.css";
import logo from "./img/Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
function Modal(props) {
    return (
        <div className="modalContainer">
            <div id="modal">
                <button onClick={()=>{props.closeModal(false)}} id="close"> <FontAwesomeIcon icon={faArrowLeftLong} /> </button>
                <div className="clip_3">
                    <h1> SIGN IN </h1>
                    <form action="/welcome" method="GET" className="home">
                        <div><input type="text" placeholder="Name" /></div>
                        <div><input type="email" placeholder="Email" /></div>
                        <div className="clip_2"><input type="submit" value="Sign in" /></div>
                    </form>
                    <img src={logo} alt="Data Science Logo" className="Logo" />
                </div>
            </div>
        </div>
    )
}
export default Modal;