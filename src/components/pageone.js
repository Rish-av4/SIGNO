import React from "react";
import first from "../Images/gone.png"
import second from "../Images/gtwo.png"
import third from "../Images/gthree.png"
import fourth from "../Images/gfour.png"


export default function Badger() {
    return (
        <>

            <div class="cardy " style={{ width: '24rem' }} >
                <div class="cardy-body">
                    <h1 class="cardy-title">How can we help your business?</h1>
                    <p class="cardy-text" style={{ color: "grey" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 ">
                <div class="cardy" id="fir">
                    <img src={first} class="cardy-img-top" alt="" />
                </div>
                <div class="cardy" id="sec">
                    <img src={second} class="cardy-img-top" alt="" />
                </div>

                <div class="cardy" id="thir">
                    <img src={third} class="cardy-img-top" alt="" />
                </div>
                <div class="cardy" id="four">
                    <img src={fourth} class="cardy-img-top" alt="" />
                </div>
            </div>
        </>

    );
}
