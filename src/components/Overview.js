import React from "react";

export default function Overview(props){
    return(
        <div className="overiew--container">
            <ul>
                <li>{props.text}</li>
            </ul>
        </div>
    )
}