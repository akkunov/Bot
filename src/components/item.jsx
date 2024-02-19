import React from 'react'
import css from './item.module.css'

export default function Item({name, image, price}) {

  return (
    <div className={css.box}>
        <div className={css.imageBox}>
            <img src={image} />
        </div>

            <div className={css.desc}>
                <span>{name}</span>
                <span>{price}</span>
            </div>
    </div>
  )
}
