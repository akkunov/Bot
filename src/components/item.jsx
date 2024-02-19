import React from 'react'
import css from './item.module.css'

export default function Item({name, image, price}) {

  return (
    <>
    <div className={css.container}>
        <img src={image}/>
        <div className={css.titleContainer}>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <button>
            ADD
        </button>
    </div>
    </>
  )
}
