import React from "react";
import Star from './images/Star 1star.png'

export default function Body(props){
    let badgeText
    if (props.e.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.e.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <section>
            <div className="Xperience1">
              {badgeText && <div className="badge">{badgeText}</div>}
                <img src= {props.e.coverImg} alt="" className="X-img1" />
                <section>
                    <div className="rating">
                    <img src= {Star}alt="" className="star" />
                    <span className="gray" >{props.e.stats.rating}</span>
                    <span className="gray">({props.e.stats.reviewCount})• </span>
                    <span>{props.e.location}</span>
                    </div>
                    <h3 className ="title">{props.e.title}</h3>
                    <p className = 'description'>
                        {props.e.description}
                        <br />
                        
                    <span className="bold">{props.e.price}</span> per person</p>
                    
                    
                </section>
            </div>
        </section> 
    )
}