import React from "react";
import first from "../Images/gone.png"
import second from "../Images/gtwo.png"
import third from "../Images/gthree.png"
import fourth from "../Images/gfour.png"


export default function Badger() {
    return (
        <>

            <div className="cardy " id="sick" style={{ width: '24rem' }} >
                <div className="cardy-body">
                    <h1 className="cardy-title">How can we help your business?</h1>
                    {/* <p className="cardy-text" style={{ color: "grey" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <p className="cardy-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 ">
                <div className="cardy" id="fir">
                    <img src={first} className="cardy-img-top" alt="" />
                </div>
                <div className="cardy" id="sec">
                    <img src={second} className="cardy-img-top" alt="" />
                </div>

                <div className="cardy" id="thir">
                    <img src={third} className="cardy-img-top" alt="" />
                </div>
                <div className="cardy" id="four">
                    <img src={fourth} className="cardy-img-top" alt="" />
                </div>
            </div>
        </>

    );
}
