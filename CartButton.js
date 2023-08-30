import classes from './CartButton.module.css';
import { showCartActions} from '../../store/showCartReducer';
import {useDispatch , useSelector} from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const Quantity =useSelector(state=> state.cart.totalQuantity);
  const toggleCartHandler=()=>{
    dispatch(showCartActions.toggle());
  }
  
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{Quantity}</span>
    </button>
  );
};

export default CartButton;
