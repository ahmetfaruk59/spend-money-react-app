import React from 'react'
import styles from './BasketItem.module.css'
function BasketItem({item,product}) {
  return (
    <>
    <li className={styles.basketItem}>
        {product.title} <span>x {item.amount}</span>
        
    </li>
    </>
    
  )
}

export default BasketItem