import React, { useState } from "react";
import Star from "../images/Star_fill.svg"
import Empty from "../images/Star.svg"


function Card (props) {
     const numVotes = props.votes
     const isAvailable = props.available
     const isPopular = props.popular

  return (
    <div>
        <div className="image__container">
           <span className="popular" style={{padding: !isPopular && "0px" }}>{isPopular ? "Popular" : null}</span>
           <img className="product__img" src={props.image} alt="" /> 
        </div>
        <div className="name__container">
            <p className="product__name">{props.name}</p>
            <p className="product__price">{props.price}</p>
        </div>
        <div>
            <ul className="list__container">
                <li>{numVotes === 0 ? <img src={Empty} alt="" /> : <img src={Star} />}</li>
                <li className="product__rating">{props.rating}</li>
                <li className="product__votes">{numVotes === 0 ? "No Ratings" : "(" + numVotes + " votes)"}</li>
                <li className="product__sold">{isAvailable === false ? "Sold Out" : null}</li>
            </ul>
        </div> 
    </div>
   

  );
}


export default Card;