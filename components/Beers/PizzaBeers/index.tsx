import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { orderBy } from 'lodash'
import InfiniteScroll from "react-infinite-scroll-component";
import { getPizzaBeersAction } from 'store/PizzaBeers/actions';
import ListItems from 'components/ListItems'
import { PropsTypes } from './types.d';
import Styles from './styles.scss'


const PizzaBeers = ({pizza}:PropsTypes) => {

  const [pizzaItems, setPizzaItems] = useState(pizza);
  const [sortVal , setSortVal] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const per_page = 27;
  const { Option } = Select;


  useEffect(() => {
    if(page===1)setPizzaItems(pizza)
    else if(pizza) setTimeout(() => { setPizzaItems(prevState => {
      if(sortVal.length> 0) {
       return sortByValue([...prevState, ...pizza],sortVal)
      }
      else return [...prevState, ...pizza]
      }) }, 2000)
  }, [pizza , page])

  const fetchMoreBeer = () => {
    setPage(prevState => {
      const page = prevState + 1
      dispatch(getPizzaBeersAction({ page, per_page, food: 'pizza' }))
      return page
    })
  }

  const sortByValue = (items , value) => {
    const sortArray = value.split(' ');
    return orderBy(items, [`${sortArray[0]}`], [`${sortArray[1]}`])
  }

  const handleChange = (value) => {
    const sortArray = value.split(' ');
    setPizzaItems(prevState => orderBy(prevState, [`${sortArray[0]}`], [`${sortArray[1]}`]))
    setSortVal(value)
  }

  return (
    <div className={Styles.pizzaContainer}>
       <div className={Styles.selectBox}>
        <Select defaultValue="sort by" style={{
          width: 150,
          margin: "5px auto",
          border: " 1px solid #262222"
        }} onChange={handleChange}>
          <Option value="name asc">sort by name (asc)</Option>
          <Option value="name desc">sort by name (desc)</Option>
          <Option value="abv asc">sort by abv (asc)</Option>
          <Option value="abv desc">sort by abv (desc)</Option>
        </Select>
      </div>
      {pizzaItems && <InfiniteScroll
        dataLength={pizzaItems.length}
        next={fetchMoreBeer}
        hasMore={pizza ? pizza.length > 0 ? true : false : true}
        loader={<h4 style={{ textAlign: "center", color:"#000" }}>Loading...</h4>}
        height={411}
        endMessage={
          <p style={{ textAlign: "center", color:"#000" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ListItems items={pizzaItems} />
      </InfiniteScroll>}
    </div>
  );
}
export default React.memo(PizzaBeers);

