import React, { useState } from 'react'
import css from './item.module.css'
 
export default function Item(props) {
    const {name,id, price, image,basket, ubdateBusketPlus,ubdateBusketMinus} = props


    const currentItemInBasket = basket?.find(i => i.id === id);
    const quantityInBasket = currentItemInBasket ? currentItemInBasket.quantity : 0;


    const handleClickPlus = () => {
        const newItem = {name, id, price, image}
        ubdateBusketPlus(newItem)
    }


    const handleClickMinus = () => {
        const newItem = {name, id, price, image}
        ubdateBusketMinus(newItem)
    }


   


  return (
    <div className={css.box}>    
        <div className={css.imageBox}>
            {quantityInBasket > 0 && <span>{quantityInBasket}</span> }
            <img src={image} />
        </div>

            <div className={css.desc}>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <div className={css.btnGroup}>
            {quantityInBasket > 0 ? (
                <>
                    <button className={css.animatedButtonMinus} onClick={handleClickMinus} >-</button>
                    <button 
                        className={css.animatedButton}
                        onClick={handleClickPlus}
                    >+</button>
                </>
            ): 
            ( <button className={css.button} onClick={handleClickPlus}>
                    ADD
                </button>) } 
            </div>
           
    </div>
  )
}
