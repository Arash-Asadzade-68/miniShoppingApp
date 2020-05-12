import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { orderBy } from 'lodash'
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllBeersAction } from 'store/Beers/actions'
import ListItems from 'components/ListItems'
import { PropsTypes } from './types.d'
import Styles from './styles.scss'




const AllBeers = ({ beers }: PropsTypes) => {

  const [beersItems, setBeersItems] = useState(beers);
  const [sortVal , setSortVal] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const per_page = 27;
  const { Option } = Select;

  useEffect(() => {


    if (page === 1) setBeersItems(beers)
    else if (beers) setTimeout(() => { setBeersItems(prevState => {
      if(sortVal.length> 0) {
       return sortByValue([...prevState, ...beers],sortVal)
      }
      else return [...prevState, ...beers]
      }) }, 2000)
  }, [beers, page])

  const fetchMoreBeer = () => {
    setPage(prevState => {
      const page = prevState + 1
      dispatch(getAllBeersAction({ page, per_page }))
      return page
    })
  }
  // const handleChange = (value) => {
  //   setSortVal(value);
  // }
  const sortByValue = (items , value) => {
    const sortArray = value.split(' ');
    return orderBy(items, [`${sortArray[0]}`], [`${sortArray[1]}`])
  }

  const handleChange = (value) => {
    const sortArray = value.split(' ');
    setBeersItems(prevState => orderBy(prevState, [`${sortArray[0]}`], [`${sortArray[1]}`]))
    setSortVal(value)
  }
  return (

    <div className={Styles.allBeersContainer}>
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
      {beersItems && <InfiniteScroll
        dataLength={beersItems.length}
        next={fetchMoreBeer}
        hasMore={beers ? beers.length > 0 ? true : false : true}
        loader={<h4 style={{ textAlign: "center", color: "#000" }}>Loading...</h4>}
        height={411}
        endMessage={
          <p style={{ textAlign: "center", color: "#000" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ListItems items={beersItems} />
      </InfiniteScroll>}
    </div>



  );
}
export default React.memo(AllBeers);


