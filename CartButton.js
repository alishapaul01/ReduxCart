import classes from './CartButton.module.css';
import { showCartActions} from '../../store/showCartReducer';
import {useDispatch} from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const toggleCartHandler=()=>{
    dispatch(showCartActions.toggle());
  }
  
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
