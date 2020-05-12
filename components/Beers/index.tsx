import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import SwipeableViews from 'react-swipeable-views';
import AllBeers from './AllBeers';
import PizzaBeers from './PizzaBeers';
import SteakBeers from './SteakBeers';
import { getAllBeersAction } from 'store/Beers/actions'
import { getPizzaBeersAction } from 'store/PizzaBeers/actions'
import { getSteakBeersAction } from 'store/SteakBeers/actions'
import { PropsTypes, params } from './types.d'
import Styles from './styles.scss';

const { TabPane } = Tabs;


const Beers = () => {

  const dispatch = useDispatch();
  const { beers, pizza, steak } = useSelector((state: any) => ({
    beers: state.beers.listDto,
    pizza: state.pizzaBeers.listDto,
    steak: state.steakBeers.listDto
  }))
  const [currentTab, setCurrentTab] = useState(0);
  const per_page = 27;
  useEffect(() => {
    dispatch(getAllBeersAction({ page: 1, per_page }))
    dispatch(getPizzaBeersAction({ page: 1, per_page, food: 'pizza' }))
    dispatch(getSteakBeersAction({ page: 1, per_page, food: 'steak' }))
  }, [])




  const onChange = (index: string) => {
    setCurrentTab(parseInt(index))
  }

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index)
  };


  return (
    <div className={Styles.beersContainer}>
      <div>
        <Tabs activeKey={`${currentTab}`} onChange={onChange} >
          <TabPane tab="ALL" key="0" />
          <TabPane tab="PIZZA" key="1" />
          <TabPane tab="STEAK" key="2" />
        </Tabs>
      </div>
      <div>
        <SwipeableViews index={currentTab} onChangeIndex={handleChangeIndex} enableMouseEvents>
          <div className={Styles.beersList}>
            <AllBeers beers={beers} />
          </div>

          <div className={Styles.beersList}>
            <PizzaBeers pizza={pizza} />
          </div>
          <div className={Styles.beersList}>
            <SteakBeers steak={steak} />
          </div>
        </SwipeableViews>
      </div>

    </div>
  );
}

export default React.memo(Beers);


