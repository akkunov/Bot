import React from 'react'
import  burger from '../assets/foods/burger.png'
import  pizza from '../assets/foods/pizza.jpg'
import  cola from '../assets/foods/cola.jpg'
import  fries from '../assets/foods/fries.jpg'
import Item from './item'
import css from './items.module.css'

const items  = [
    {name: 'Burger',image:burger, price: '1.125$'},
    {name: 'Pizza',image:pizza, price: '1.12$'},
    {name: 'Cola',image:cola, price: '1.5$'},
    {name: 'Fries',image:fries, price: '1.8$'},
]

export default function Items() {



  return (
  
    <div className={css.container }>
        {items.map((item,index) =><Item {...item}  key={index}/>    )}
    </div>
  )
}
