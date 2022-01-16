import React from "react";

import Video from "../Images/video.png"

export default function PageTwo() {
    return (
        <>
            <div className="video">
                <img src={Video} class="img-fluid-one" alt="..." />

                <div class="col-md-4" id="juice">
                    <div class="h-100 p-5 bg-white  rounded-3">
                        <h2 >Great Digital Product Agency since 2016</h2>
                        <p style={{ color: "grey" }}>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                    </div>
                </div>
            </div>

        </>
    );
}