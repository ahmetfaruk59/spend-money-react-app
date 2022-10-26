import React from 'react'
import {moneyFormat} from '../helpers'
import styles from './Header.module.css'
function Header({money,total}) {
  return (
        <>
        {
            total>0 && money-total!==0 && (
                <div className={styles.header}>Harcayacak <span>$ {moneyFormat(money-total)}</span> paranız kaldı.</div>
            )
        }
        {
            total===0 && (
                <div className={styles.header}> Harcamak için <span>$ {moneyFormat(money)}</span> paranız var.</div>
            )
        }
        {
            money-total===0 && (
                <div className={`${styles.header} ${styles.empty}`}>Paranız kalmadı.</div>
            )
        }

        </>
  )
}

export default Header