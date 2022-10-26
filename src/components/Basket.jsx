import React from 'react'
import BasketItem from './BasketItem'
import styles from './Basket.module.css'
import {moneyFormat} from '../helpers';
function Basket({total,basket,product,resetBasket}) {
  return (
    <>
    <div className={`${styles.basketContainer} ${styles.container}`}>
        <h3>Alışveriş Detayları</h3>
        {
            basket.map(item=>(
                <BasketItem key={item.id} item={item} product={product.find(pro=>pro.id===item.id)}/>
            ))
        }

            <div className={styles.total}>
					Toplam: ${moneyFormat(total)}
				</div>
           <button className={styles.basketResetBtn} onClick={resetBasket}>Sepeti Sıfırla</button>

    </div>

    </>
    
  )
}

export default Basket
