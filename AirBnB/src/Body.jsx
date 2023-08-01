import React from "react";
import Star from './images/Star 1star.png'

export default function Body(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <section>
            <div className="Xperience1">
              {badgeText && <div className="badge">{badgeText}</div>}
                <img src= {props.img} alt="" className="X-img1" />
                <section>
                    <div className="rating">
                    <img src= {Star}alt="" className="star" />
                    <span className="gray" >{props.rating}</span>
                    <span className="gray">({props.reviewCount})• </span>
                    <span>{props.location}</span>
                    </div>
                    <h3 className ="title">{props.title}</h3>
                    <p>
                        {props.description}
                        <br />
                        
                    <span className="bold">{props.price}</span> per person</p>
                    
                    
                </section>
            </div>
        </section> 
    )
}