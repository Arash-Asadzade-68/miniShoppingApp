import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { orderBy } from 'lodash'
import InfiniteScroll from "react-infinite-scroll-component";
import { getSteakBeersAction } from 'store/SteakBeers/actions'
import ListItems from 'components/ListItems'
import { PropsTypes } from './types.d'
import Styles from './styles.scss'

const SteakBeers = ({ steak }: PropsTypes) => {

  const [steakItems, setsteakItems] = useState(steak);
  const [sortVal, setSortVal] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const per_page = 27;
  const { Option } = Select;


  useEffect(() => {
    if (page === 1) setsteakItems(steak)
    else if (steak) setTimeout(() => {
      setsteakItems(prevState => {
        if (sortVal.length > 0) {
          return sortByValue([...prevState, ...steak], sortVal)
        }
        else return [...prevState, ...steak]
      })
    }, 2000)
  }, [steak, page])


  const fetchMoreBeer = () => {
    setPage(prevState => {
      const page = prevState + 1
      dispatch(getSteakBeersAction({ page, per_page, food: 'steak' }))
      return page
    })

  }

  const sortByValue = (items, value) => {
    const sortArray = value.split(' ');
    return orderBy(items, [`${sortArray[0]}`], [`${sortArray[1]}`])
  }

  const handleChange = (value) => {
    const sortArray = value.split(' ');
    setsteakItems(prevState => orderBy(prevState, [`${sortArray[0]}`], [`${sortArray[1]}`]))
    setSortVal(value)
  }

  return (

    <div className={Styles.steakContainer}>
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
      {steakItems && <InfiniteScroll
        dataLength={steakItems.length}
        next={fetchMoreBeer}
        hasMore={steak ? steak.length > 0 ? true : false : true}
        loader={<h4 style={{ textAlign: "center", color: "#000" }}>Loading...</h4>}
        height={411}
        endMessage={
          <p style={{ textAlign: "center", color: "#000" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ListItems items={steakItems} />
      </InfiniteScroll>}
    </div>



  );
}
export default React.memo(SteakBeers);


