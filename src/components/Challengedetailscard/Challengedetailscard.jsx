import React from "react";
import "./Challengedetailscard.css";

const Challengedetailscard =({cardname, cardvalue})=>{
    return (
        <div className="details-card-container">
            <div className="card-name">{cardname}</div>
            <div className="card-value">{cardvalue}</div>
        </div>
    );
}
export default Challengedetailscard;