import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectdata, newsTopHeadlines } from '../../features/home/HomeSlice';

import Header from '../component/Header';
import Slider from '../component/Slider';
import TopLineNews from '../component/TopLineNews';
import Kindnews from '../component/kindnews';
import Menu from '../component/Menu'
import Footer from '../component/Footer'
import styles from './Screenpage.module.css';
import {
  NewsBusiness, selectDataBusiness,
  NewsEntertainment, selectDataEntertaiment,
  NewsHealth, selectDataHealth,
  NewsScience, selectDataSciene,
  NewsSports, selectDataSport,
  NewsTechnology, selectDataTechnology
} from '../../features/home/kindSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faHouse } from '@fortawesome/free-solid-svg-icons'


export function HomePage() {

  const data = useSelector(selectdata);
  const dataBusiness = useSelector(selectDataBusiness);
  const dataEntertaiment = useSelector(selectDataEntertaiment);
  const dataHealth = useSelector(selectDataHealth);
  const dataSciene = useSelector(selectDataSciene);
  const dataSport = useSelector(selectDataSport);
  const dataTechnology = useSelector(selectDataTechnology);
  const dispatch = useDispatch();
  const [lastPageReached, setLastPageReached] = useState(false);
  const [newList, setnewList] = useState([]);
  const [TopLineNewsData, setTopLineNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     if (lastPageReached) return;
    // if (loading) {
    //   dispatch(newsTopHeadlines(1));
    //   dispatch(NewsBusiness({ pageSize: 5, pageNumber: 1 }))
    //   dispatch(NewsEntertainment({ pageSize: 5, pageNumber: 1 }))
    //   dispatch(NewsHealth({ pageSize: 5, pageNumber: 1 }))
    //   dispatch(NewsScience({ pageSize: 5, pageNumber: 1 }))
    //   dispatch(NewsSports({ pageSize: 5, pageNumber: 1 }))
    //   dispatch(NewsScience({ pageSize: 5, pageNumber: 1 }))
    //   dispatch(NewsTechnology({ pageSize: 5, pageNumber: 1 }))
    //   setLoading(!loading);
    // }


    if (data.length === 0) {
      console.log("Array is empty!")
    } else {
      const Listdata = data.articles;
      const ListSliderItem = Listdata.slice(0, 5);
      setnewList(ListSliderItem);
      setTopLineNewsData(Listdata.slice(5, 15));
      setLastPageReached(true);
    }



  })

  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <div className={styles.slidernews} >
        {
          !lastPageReached ? null : <Slider data={newList} />
        }
      </div>


      <div className={styles.bodynews}>
        <div className={styles.topLines}>
          {TopLineNewsData.length === 0 ? null : TopLineNewsData.map((data, i) =>
            <TopLineNews data={data} key={i} />
          )}
        </div>
        <div className={styles.kindnews}>
          {
            dataBusiness.length === 0 ? null : <Kindnews data={dataBusiness} kind='business' />
          }
          {
            dataEntertaiment.length === 0 ? null : <Kindnews data={dataEntertaiment} kind='entertainment' />
          }
          {
            dataHealth.length === 0 ? null : <Kindnews data={dataHealth} kind='health' />
          }
          {
            dataSciene.length === 0 ? null : <Kindnews data={dataSciene} kind='science' />
          }
          {
            dataSport.length === 0 ? null : <Kindnews data={dataSport} kind='sports' />
          }
          {
            dataTechnology.length === 0 ? null : <Kindnews data={dataTechnology} kind='technology' />
          }

        </div>

      </div>
      <Footer/>
    </div>
  )
}
