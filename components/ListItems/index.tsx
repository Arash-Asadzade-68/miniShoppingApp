import React, { useState } from 'react';
import ShowInfo from 'components/Modal'
import { PropsTypes } from './types';
import Styles from './styles.scss'


const ListItems = ({ items }: PropsTypes) => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)

  const showModal = (item: object) => {
    setShowInfo(true)
    setSelectedItem(item)
  };
  return (
    <div className={Styles.listItemContainer}>
      {
        items?.map(item => <div className={Styles.beerCard} key={item.id}
          >
          <div onClick={() => showModal(item)}>
            <img src={item.image_url} alt="beer" />
          </div>
          <span>{item.name}</span>
          <span>{item.abv}</span>
        </div>)
      }
      <ShowInfo
        setShowInfo={setShowInfo}
        showInfo={showInfo}
        selectedItem={selectedItem} />
    </div>
  )
}
export default ListItems;