import { useDispatch, useSelector } from 'react-redux';
import {isEmpty} from 'lodash'
import { modifyCartItemsAction } from 'store/CartItems/actions';
import { Modal, Collapse } from 'antd';
import { PropsTypes, selectedItem } from './types.d'
import Styles from './styles.scss'

const BeerInfo = ({ setShowInfo, showInfo, selectedItem }: PropsTypes) => {

  const { cartItems } = useSelector((state: any) => state.cartItems);
  const { Panel } = Collapse;
  const dispatch = useDispatch();
  const addToCart = (selectedItem: selectedItem) => {

    const newItems = [...cartItems];
    if (!isEmpty(newItems)) {
      let foundIndex = newItems.findIndex(element => element.item.id === selectedItem.id)
      if(foundIndex!==-1)
      newItems.splice(foundIndex, 1, {item:selectedItem ,count:newItems[foundIndex].count+1})
      else newItems.push({ item: selectedItem, count: 1 })
    } else newItems.push({ item: selectedItem, count: 1 })

    dispatch(modifyCartItemsAction(newItems))
    setShowInfo(false)
  };
  const handleClose = () => {
    setShowInfo(false)
  };
  return (
    <div >
      <Modal
        className={Styles.modalContainer}
        visible={showInfo}
        closeIcon={<span>close</span>}
        onCancel={handleClose}
        footer={null}
      >
        <div className={Styles.showItemInfo}>
          <div style={{ marginRight: '5px' }}>
            <h2 style={{ color: "#ffffff" }}>{selectedItem?.name}</h2>
            <p>{selectedItem?.tagline}</p>
            <p>{selectedItem?.abv}</p>
            <Collapse>
              <Panel header="description" key="1">
                <p className={Styles.description}>{selectedItem?.description}</p>
              </Panel>
              <Panel header="food pairing" key="2">
                <p className={Styles.foodPairing}>{selectedItem?.food_pairing}</p>
              </Panel>
            </Collapse>
          </div>
          <div>
            <div >
              <img src={selectedItem?.image_url} alt="beer" />
            </div>
            <button onClick={() => addToCart(selectedItem)} >Add To Cart</button>
          </div>
        </div>

      </Modal>
    </div>
  );
}


export default BeerInfo;