import React from 'react';
import {GoodsItem} from './GoodsItem';

export const GoodsList = (props) =>{
    const {goods=[], 
        addToBasket=Function.prototype, 
        handleBasketShow=Function.prototype} = props;

    if(!goods.length){
        return <h1>Nothing found</h1>
    }
    return(
        <div className="goods">
        {
            goods.map((item)=>(
                 <GoodsItem key={item.id} {...item} 
                 addToBasket={addToBasket}
                 handleBasketShow={handleBasketShow}
                 />
            ))
        }
        </div>
    )
}