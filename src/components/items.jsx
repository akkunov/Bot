import  { useEffect, useState } from 'react'
import Item from './item'
import css from '../styles/items.module.css'
import {dataClothes} from '../data/data';
import {useNavigate} from "react-router-dom";


export default function Items() {
    const  [items, setItems]= useState(dataClothes || [])
    const [basket, setBasket] = useState([])
    const navigate = useNavigate()


    function updateBasketPlus (item) {
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

    function updateBasketMinus (item) {
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

    function navToAdmin (){
        navigate('/admin')
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
                  updateBasketPlus={updateBasketPlus}
                  updateBasketMinus={updateBasketMinus}
              />
          } )}

          <span onClick={navToAdmin}>
            nav to admin!
          </span>
  </div>

  )
}
