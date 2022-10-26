import React from 'react'
import styles from './Product.module.css'
import {moneyFormat} from '../helpers'
function Product({product,basket,setbasket,total,money}) {

    const basketItem=basket.find(item=>item.id===product.id)


    const addBasket=()=>{

        const checkBasket=basket.find(item=>item.id===product.id);

        if (checkBasket) {
            checkBasket.amount+=1;
            setbasket([...basket.filter(item=>item.id!==product.id),checkBasket])
        } 
        else {
            setbasket([...basket,{
                id:product.id,
                amount:1
            }])
        }
    }

    const removeBasket=()=>{
        const currentBasket=basket.find(item=>item.id===product.id);
        const basketWithoutCurrent=basket.filter(item=>item.id!==product.id)
        currentBasket.amount-=1;
        if (currentBasket.amount===0) {
            setbasket([...basketWithoutCurrent])
        } 
        else {
            setbasket([...basketWithoutCurrent,currentBasket])
        }
    }
  return (
        <>
            <div  className={styles.product}>
                    <img src={product.image} alt=""/>
                    <h6>{product.title}</h6>
                    <div className={styles.price}>{moneyFormat(product.price)}</div>
                    <div className={styles.actions}>
                        <button className={styles.sellBtn} disabled={!basketItem} onClick={removeBasket}>Sat</button>
                        <span className={styles.amount}>{basketItem && basketItem.amount || 0}</span>
                        <button className={styles.buyBtn} disabled={total+product.price>money} onClick={addBasket}>Al</button>

                    </div>
            </div>
        </>


    
  )
}

export default Product