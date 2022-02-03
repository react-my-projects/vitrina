import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import {Alert} from './Alert';

export const Shop = () =>{

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) =>{
        const itemIndex = order.findIndex(orderItem=>orderItem.id === item.id)
        if(itemIndex<0){
            const newItem = {
                ...item, quantity: 1
            }
            setOrder([...order, newItem])
        }else{
            const newOrder = order.map((el, index)=>{
                if(index===itemIndex){
                    return{
                        ...el, quantity: el.quantity+1
                    }
                }else{
                    return el  
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    }
    const handleBasketShow = () =>{
        setBasketShow(!isBasketShow);
    }
    const closeAlert = () => {
        setAlertName('');
    };
    const removeFromBasket = (itemId) =>{
        const newOrder = order.filter(el =>el.id !== itemId)
        setOrder(newOrder)
    }
    const incQuantity = (id) =>{
        const newOrder = order.map((el)=>{
            if(el.id===id){
                return{
                    ...el, quantity:el.quantity+1
                }
            } else{
                return el;
            }
        })
        setOrder(newOrder)
    }
    const decQuantity = (id) =>{
        const newOrder = order.map((el)=>{
            if(el.id===id){
                const newQuantity = el.quantity - 1;
                return{
                    ...el, quantity: newQuantity>=0 ? newQuantity : 0
                }
            } else{
                return el;
            }
        })
        setOrder(newOrder)
    }

    useEffect(()=>{
        fetch(API_URL, {
            headers:{
                'Authorization': API_KEY
            }
        }).then(response=>response.json()).then(data=>{
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
    },[])

    return(
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading? <Preloader/>:<GoodsList goods={goods} 
                addToBasket={addToBasket}
                removeFromBasket={removeFromBasket}/>
            }
            {isBasketShow && <BasketList order={order} 
            removeFromBasket={removeFromBasket}
            handleBasketShow={handleBasketShow}
            incQuantity={incQuantity}
            decQuantity={decQuantity}/>}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    )
}
