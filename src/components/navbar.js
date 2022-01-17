import React from "react";
import picOne from "../Images/landing-page-image.png"
export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">A+ Studio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-5 mx-5">
                            <li className="nav-item ">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">What we Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">
                <div className="col-md-5 p-lg-5 my-4">
                    {/* I removed mx-auto from the above line of code so that it can be brought to left */}
                    <h1 className="display-5">A Digital Product Agency</h1>
                    {/* Removed fw-5 from above */}
                    <p className="lead ">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apples marketing pages.</p>
                    {/* fw-normal is removed from above */}
                    <a className="btn btn-primary" href="/">Contact Now</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>

                <div className="firstPic">
                    <img src={picOne} className="img-fluid" alt="" ></img>
                </div>
            </div>
        </>
    );
}
