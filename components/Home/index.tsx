import React, { useState } from 'react';
import { Tabs } from 'antd';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import Beers from 'components/Beers'
import Foods from 'components/Foods'
import Discounts from 'components/Discounts'
import Searchs from 'components/Searchs'
import ShoppingCart from 'components/ShoppingCart';
import CoffeSVG from './../../public/svgs/coffee.svg'
import Kitchen from './../../public/svgs/kitchen.svg'
import DiscountSVG from './../../public/svgs/discount.svg'
import SearchSVG from './../../public/svgs/search.svg'
import Styles from './styles.scss';

const { TabPane } = Tabs;

const DemoTabs = () => {

  const [currentTab, setCurrentTab] = useState(0);

  const onChange = (index: string) => {
    setCurrentTab(parseInt(index))
  }

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index)
  };

  return (
    <div className={Styles.homeContainer}>
      <div>
        <Tabs activeKey={`${currentTab}`} onChange={onChange} >
          <TabPane tab={
            <span>
              <CoffeSVG fill="#FFF" className={Styles.tabSvg} />
            </span>
          } key="0" />
          <TabPane tab={
            <span>
              <Kitchen fill="#FFF" className={Styles.tabSvg} style={{ padding: "8px!important" }} />
            </span>
          } key="1" />
          <TabPane tab={
            <span>
              <DiscountSVG fill="#FFF" className={Styles.tabSvg} style={{ padding: "8px!important" }} />
            </span>
          } key="2" />
          <TabPane tab={
            <span>
              <SearchSVG fill="#FFF" className={Styles.tabSvg} />
            </span>
          } key="3" />
        </Tabs>
      </div>
      <div className={Styles.content}>
        <SwipeableViews index={currentTab} onChangeIndex={handleChangeIndex} enableMouseEvents>
          <div>
            <Beers />
          </div>
          <div>
            <Foods />
          </div>
          <div >
            <Discounts />
          </div>
          <div>
            <Searchs />
          </div>
        </SwipeableViews>
        <div>
        <ShoppingCart />
      </div>
      </div>
     
    </div>
  );
}

export default DemoTabs;
