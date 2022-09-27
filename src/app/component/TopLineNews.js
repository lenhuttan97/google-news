import React from 'react'
import Moment from 'react-moment';
import styles from '../srceenpage/Screenpage.module.css'

function TopLineNews(props) {
    const data1 = props.data;
    const key = props.key;
   
    return (
        <div className={styles.toplinenewsitem} key={key}>
            <h2    onClick={() => window.open(data1.url, '_blank', 'noopener,noreferrer')}>{data1.title}</h2>
            <div>
                <img src={data1.urlToImage} 
                   onClick={() => window.open(data1.url, '_blank', 'noopener,noreferrer')} />
                <p>{data1.content}</p>
            </div>
            <span>
                <a>{data1.source.name}</a>
                <a>{data1.author}</a>
                <Moment fromNow>{data1.publishedAt}</Moment>
            </span>
        </div>
    )
}

export default TopLineNews