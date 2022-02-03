import React from 'react';
import { BasketItem } from './BasketItem';

const BasketList = (props) =>{
    const {order=[], 
        removeFromBasket=Function.prototype,
        handleBasketShow=Function.prototype,
        decQuantity=Function.prototype,
        incQuantity=Function.prototype
    } = props;
    const totalPrice = order.reduce((sum, el)=>{
        return sum + el.price*el.quantity;
    }, 0)    
    return(
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
        {
            order.length? order.map((item)=>{
                return <BasketItem key={item.id} {...item} 
                removeFromBasket={removeFromBasket}
                decQuantity={decQuantity}
                incQuantity={incQuantity}/>
            }):<li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item">Итого: {totalPrice} руб</li>
        <li className='collection-item'>
                <button className='btn btn-small'>Оформить</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
      </ul>
    
    )
}
export {BasketList};