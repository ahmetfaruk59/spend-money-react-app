import { useEffect, useState } from 'react';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Product from './components/Product';
import products from './products.json'
function App() {
  const [money, setmoney] = useState(1000000)
  const [basket, setbasket] = useState([])
  const [total, settotal] = useState(0)

  const resetBasket=()=>{
    setbasket([])
  }
  
  useEffect(() => {   
      settotal(basket.reduce((acc,item)=>{
        return acc+(item.amount*(products.find(product=>product.id===item.id).price))
      },0))
  },[basket])
  const handleScroll=()=> {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  
  return (
      <>
        <Header total={total} money={money}/>
        <div className='container products'>
        <button type="button" hidden={!total} className='scrollToBasket' onClick={handleScroll}>🛒</button>
        {
         products.map(product=>(
            <Product key={product.id} basket={basket} setbasket={setbasket} product={product} total={total} money={money}/>
         ))}
        </div>
        {
          total>0 &&  <Basket resetBasket={resetBasket} total={total} product={products} basket={basket}/>
        }
        
      </>

  );
}

export default App;
