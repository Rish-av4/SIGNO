import React from "react";
import google from "../Images/google.png"
import airbnb from "../Images/airbnb.png"
import ubereats from "../Images/ubereats.png"
import amazon from "../Images/amazon.png"

export default function Footer1() {
    return (
        <>

            <div>
                <div className="footerText mx-4">
                    <h1 className="description">Our Clients</h1>
                    <p className="description" id="jugaad">Lorem ipsum dolor sit amet adipisicing.</p>
                </div>

                <div className="thebrands">
                    <img src={google} className="rounded mx-3 " alt="" />
                    <img src={airbnb} className="rounded mx-3 " alt="" />
                    <img src={ubereats} className="rounded mx-3" alt="" />
                    <img src={amazon} className="rounded mx-3 " alt="" />
                </div>

            </div>

        </>

    );
}
