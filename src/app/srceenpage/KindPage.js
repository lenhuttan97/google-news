import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './Screenpage.module.css';
import Header from '../component/Header';
import Footer from '../component/Footer'
import {
  useParams
} from "react-router-dom";
import {
  NewsBusiness, selectDataBusiness,
  NewsEntertainment, selectDataEntertaiment,
  NewsHealth, selectDataHealth,
  NewsScience, selectDataSciene,
  NewsSports, selectDataSport,
  NewsTechnology, selectDataTechnology
} from '../../features/home/kindSlice';
import TopLineNews from '../component/TopLineNews';
import { KindItem, selectDataKindItem } from '../../features/home/kindItemSlice';
import Kindpageright from '../component/Kindpageright';
import Menu
  from '../component/Menu';
export function KindPage() {

  let { id } = useParams();
  const data = useSelector(selectDataKindItem);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const dataBusiness = useSelector(selectDataBusiness);
  const dataEntertaiment = useSelector(selectDataEntertaiment);
  const dataHealth = useSelector(selectDataHealth);
  const dataSciene = useSelector(selectDataSciene);
  const dataSport = useSelector(selectDataSport);
  const dataTechnology = useSelector(selectDataTechnology);

  useEffect(() => {
    if (loading) {
      //   dispatch(KindItem({ pageSize: 10, pageNumber: 1, category: id }));
      setLoading(!loading);
    }
    //  console.log(id);
  })


  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <div className={styles.bodynews} >
        <div className={styles.topLines} style={{ width: '125%', borderRight: '1px solid silver', paddingRight: '15px' }}>
          {data.length === 0 ? null : data.articles.map((data, i) =>
            <TopLineNews data={data} key={i} />
          )}
        </div>
        <div className={styles.kindnews}>
          {
            dataBusiness.length === 0 || id === 'business' ? null : <Kindpageright data={dataBusiness} kind='business' />
          }
          {
            dataEntertaiment.length === 0 || id === 'entertainment' ? null : <Kindpageright data={dataEntertaiment} kind='entertainment' />
          }
          {
            dataHealth.length === 0 || id === 'health' ? null : <Kindpageright data={dataHealth} kind='health' />
          }
          {
            dataSciene.length === 0 || id === 'science' ? null : <Kindpageright data={dataSciene} kind='science' />
          }
          {
            dataSport.length === 0 || id === 'sports' ? null : <Kindpageright data={dataSport} kind='sports' />
          }
          {
            dataTechnology.length === 0 || id === 'technology' ? null : <Kindpageright data={dataTechnology} kind='technology' />
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
