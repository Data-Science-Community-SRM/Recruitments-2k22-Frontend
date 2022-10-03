import React from "react";
import "./HomePage.css";
function Modal(props) {
    return (
        <div className="modalContainer">
            <div id="modal">
                <button onClick={()=>{props.closeModal(false)}} id="close"> Close </button>
                <div className="clip_3">
                    <h1> SIGN IN </h1>
                    <form action="#" method="POST">
                        <div><input type="text" placeholder="Name" /></div>
                        <div><input type="email" placeholder="Email" /></div>
                        <div className="clip_2"><input type="submit" value="Sign in" /></div>
                    </form>
                    <img src="./img/Logo.svg" alt="Data Science Logo" className="Logo" />
                </div>
            </div>
        </div>
    )
}
export default Modal;