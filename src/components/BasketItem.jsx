import React from 'react';

const BasketItem = (props) =>{
    const {name, id, price, quantity, removeFromBasket, decQuantity, incQuantity} = props;
    return <li className="collection-item" key={id}>
        {name}<i className="material-icons basket-quantity" onClick={()=>{decQuantity(id)}}>remove</i>x 
        {quantity}
        <i className="material-icons basket-quantity" onClick={()=>{incQuantity(id)}}>add</i> = {price*quantity} руб
    <button className="secondary-content" onClick = {()=>removeFromBasket(id)}>
        <i className="material-icons">close</i>
    </button>
    </li>
    
}
export {BasketItem};