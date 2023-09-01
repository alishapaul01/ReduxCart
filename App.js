import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector , useDispatch} from 'react-redux';
import { showCartActions } from './store/showCartReducer';
import Notification from './components/UI/Notification'
let isInitial =true;
const App=()=> {
  const dispatch= useDispatch()
  const showCart= useSelector(state=> state.showCart.isVisible);
  const cart= useSelector(state=> state.cart);
  const notification=  useSelector(state=> state.showCart.notification)
  useEffect(()=>{
    const sendCartData= async()=>{
      dispatch(showCartActions.showNotification({
        status: 'pending',
        title: "Sending...",
        message: 'Sending Cart Data!'
      }))
    const response= await fetch('https://react-https-4e350-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart)
      }
    );
    if(!response.ok){
      throw new Error('Sending cart data failed')
    }
    dispatch(showCartActions.showNotification({
      status: 'success',
      title: "Success!",
      message: 'Sent Cart Data Successfully!'
    })
    );
  }

  if (isInitial){
    isInitial= false;
    return
  }
  sendCartData().catch(error=>
    dispatch(showCartActions.showNotification({
      status: 'error',
      title: "Error!",
      message: 'Sending Cart data failed!'
    })))
  }, [cart, dispatch])
  return (
    <>
    {notification && (
    <Notification 
    status= {notification.status}
    title= {notification.title}
    message= {notification.message}/>)}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
