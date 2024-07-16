import React, { useState, useEffect } from "react";
import Card from "./Card"
import axios from "axios"


function CardBody () {
    const [data, setData] = useState([]);
    const [isAvailable, setIsAvailable] = useState(false)
    const [allCoffeeData, setAllCoffeeData] = useState([]);

 
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => {
        setData(response.data);
        setAllCoffeeData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function createCard(dataItem) {
    return (
      <Card
      key={dataItem.id}
        name={dataItem.name}
        image={dataItem.image}
        price={dataItem.price}
        popular={dataItem.popular}
        rating={dataItem.rating}
        votes={dataItem.votes}
        available={dataItem.available}
      />
    ) 
  }

 function handleAvailable () {
    setIsAvailable(true)
    const availableCoffees = data.filter(item=>item.available===true);
    setData(availableCoffees)
 }

 function handleAll() {
    // setIsAvailable(false)
    setData(allCoffeeData)
 }

    return (
        <div className="card__container">
            <div className="card__info">
                <h2>Our Collection</h2>
                <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
                expertly roasted in small batches and shipped fresh weekly.</p>
                <div className="btn__container">
                <button id="btn__all" onClick={handleAll}>All Products</button>
                <button id="btn__filter" onClick={handleAvailable}>Available Now</button>
            </div> 
            </div>
           <div className="product__container">
            {data.map(createCard)}
           </div>
        </div>
        
    )
}



export default CardBody;
