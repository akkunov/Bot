import React, { useState } from 'react'
import css from './item.module.css'

export default function Item({name, image, price}) {

    const [isClicked, setIsClicked] = useState(false);
    const [cols, setCols] = useState(null)
    const handleAddButtonClick = () => {
        setIsClicked(true);
    };

    const handleClick = () => {
        setCols(prev => prev + 1 )
    }

  return (
    <div className={css.box}>
    
        <div className={css.imageBox}>
            <img src={image} />
        </div>

            <div className={css.desc}>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <div className={css.btnGroup}>
            {cols? (
                <>
                    <button className={css.animatedButtonMinus}>-</button>
                    <button className={css.animatedButton}>+</button>
                </>
                   

            ): ( <button className={css.button} onClick={handleClick}>
                    ADD
                </button>) } 
            </div>
           
    </div>
  )
}
