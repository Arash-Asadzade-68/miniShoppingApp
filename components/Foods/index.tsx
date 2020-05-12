import React, { useState } from 'react';
import { Tabs } from 'antd';
import { PropsTypes } from './types';
import Styles from './styles.scss'
import Coffe from './../../public/svgs/coffee.svg'
import Foods from './../../public/svgs/kitchen.svg'
import Discount from './../../public/svgs/discount.svg'
import Search from './../../public/svgs/search.svg'

const Tab = ({key , tabName}:PropsTypes) => {

  const { TabPane } = Tabs;
  const renderTab = () =>{
    console.log('tabName', tabName)

    {
      switch (tabName) {
        case "Coffe":
          return <Coffe fill="#FFF" className={Styles.tabSvg} />
      
        case "Foods":
          return <Foods fill="#FFF" className={Styles.tabSvg} />
            
        case "Discount":
          return <Discount fill="#FFF" className={Styles.tabSvg} />
  
        case "Search":
          return <Search fill="#FFF" className={Styles.tabSvg} />
            
        default:
          return tabName

      }
    }
  }
return(
  <TabPane tab={
    <span>
        {renderTab}
    </span>
  } key={`${key}`} />
)}
export default Tab;