import React, { useEffect, useState } from 'react'
import Item from './item'
import css from './items.module.css'
import { dataItems } from '../data/data';


export default function Items() {
    const  [items, setItems]= useState(dataItems || [])
    const [basket, setBasket] = useState([])


    function ubdateBusketPlus (item) {
        const existingItemIndex = basket.findIndex((basketItem) => basketItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Если товар уже есть в корзине, увеличиваем его количество
            const updatedBasket = [...basket];
            updatedBasket[existingItemIndex].quantity++;
            setBasket(updatedBasket);
            return
        } 
        setBasket([...basket, { ...item, quantity: 1 }]);
    }

    function ubdateBusketMinus (item) {
        const existingItemIndex = basket.findIndex((basketItem) => basketItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Если товар уже есть в корзине, увеличиваем его количество
            const updatedBasket = [...basket];
            updatedBasket[existingItemIndex].quantity--;
            if(  updatedBasket[existingItemIndex].quantity == 0 ){
                updatedBasket[existingItemIndex].quantity = 0;
            }
            setBasket(updatedBasket);
            return
        } 
        setBasket([...basket, { ...item, quantity: 1 }]);
    }

    useEffect(() => {
        console.log(basket)
    },[basket]) 

  return (
  
    <div className={css.container }>
        {items.map((item,index) =>{
           return <Item 
                {...item}  
                    key={index}
                    basket={basket}
                    ubdateBusketPlus={ubdateBusketPlus}
                    ubdateBusketMinus={ubdateBusketMinus}
                    />
        } )}
    </div>
  )
}
