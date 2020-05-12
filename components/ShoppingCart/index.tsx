import { useDispatch, useSelector } from 'react-redux';
import {isEmpty} from 'lodash'
import { modifyCartItemsAction } from 'store/CartItems/actions';
import { Item } from './types.d'
import Styles from './styles.scss'
import TrashSVG from './../../public/svgs/trash.svg'
const ShoppingCart = () => {
  const { cartItems } = useSelector((state: any) => state.cartItems);
  const dispatch = useDispatch();
  const removeItemFromCart = (deletedItem) => {
    const newItems = [...cartItems];
    dispatch(modifyCartItemsAction(newItems.filter(element => element.item.id !== deletedItem.item.id)));

  }
  const itemCountOnChange = (item, action) => {
    const newItems = [...cartItems];
    let foundIndex = newItems.findIndex(element => element.item.id === item.item.id)
    switch (action) {
      case "-": {
        newItems.splice(foundIndex, 1, { item: item.item, count: item.count > 1 ? item.count - 1 : 1 })
        dispatch(modifyCartItemsAction(newItems))
        return
      }

      default: {
        newItems.splice(foundIndex, 1, { item: item.item, count: item.count + 1 })
        dispatch(modifyCartItemsAction(newItems))
        return
      }
    }
  }
  const billOnChange = () =>{
  
     if(!isEmpty(cartItems)) {
      return cartItems.reduce((amount, cartItem) => {
        if (!cartItem.item) return amount;
        return amount + cartItem.count * cartItem.item.abv;
      }, 0);
     }else return 0;
  }
  return (
    <div tabIndex={-1} className={Styles.cartContainer}>
      <span>...</span>
      <span>Shopping Cart</span>
      <div className={Styles.cartItemsWrapper}>
        {
          cartItems.map((item: Item) => (
            <div className={Styles.cartItem} key={item.item.id}>
              <div className={Styles.cartItemInfo}>
                <div>
                  <img src={item.item.image_url} alt="beer" />
                  <span>{item.item.abv}$</span>
                </div>
                <div>
                  <span>{item.item.name}</span>
                  <span>{item.item.abv}</span>
                </div>
              </div>
              <div className={Styles.editCartItem}>
                <div>
                  <span onClick={() => itemCountOnChange(item, "+")}>+</span>
                  <span>{item.count}</span>
                  <span onClick={() => itemCountOnChange(item, "-")} >-</span>
                </div>
                <div onClick={() => removeItemFromCart(item)}>
                  <TrashSVG />
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <div className={Styles.confirmPayment}>
          <div>
          <span>Total</span>
          <span>${billOnChange()}</span>
          </div>
          <button>Confirm Payment</button>
      </div>
    </div>
  )
}

export default ShoppingCart;