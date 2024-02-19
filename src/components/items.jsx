import React from 'react'
import  burger from '../assets/foods/burger.png'
import  pizza from '../assets/foods/pizza.jpg'
import  cola from '../assets/foods/cola.jpg'
import  fries from '../assets/foods/fries.jpg'
import Item from './item'

const items  = [
    {name: 'burger',image:burger, price: '1$'},
    {name: 'pizza',image:pizza, price: '1$'},
    {name: 'cola',image:cola, price: '1$'},
    {name: 'fries',image:fries, price: '1$'},
]

export default function Items() {



  return (
  
    <div>
        {items.map((item,index) =>(
            <div key={index}>
                <Item {...item} />
            </div>
        )
         )}
    </div>
  )
}
