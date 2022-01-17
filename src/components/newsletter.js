import React from "react";
// import imageop from "../Images/Newsletter.png";

export default function Newsletter() {
    return (
        <>
            {/* <form className="row g-1 my-4 mx-4"> */}
            <form className="row g-1 mx-4" id="done">
                {/* <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
                </div> */}
                <div className="col-auto" >
                    <label form="inputPassword2" className="visually-hidden">Password</label>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Enter your email" />
                </div>
                <div className="col-auto" id="zip">
                    <button type="submit" className="btn btn-warning mb-3">Submit</button>
                </div>
            </form>
        </>
    );
}