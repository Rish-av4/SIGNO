import React from "react";
// import imageop from "../Images/Newsletter.png";

export default function Newsletter() {
    return (
        <>
            <form class="row g-3 my-4 mx-4">
                {/* <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
                </div> */}
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="Enter your email" />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
        </>
    );
}