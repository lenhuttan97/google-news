import React from 'react'
import styles from '../srceenpage/Screenpage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faHouse } from '@fortawesome/free-solid-svg-icons'



function Kindpageright(props) {
const data = props.data.articles;
  return (
    <div className={styles.Kindpagerightconcainer}>
        <div className={styles.header}>
            <h2 >
                <a href={'/google-news/page/' + props.kind}>
                {props.kind}
                </a></h2>
            {/* <FontAwesomeIcon icon={faAngleDown}/> */}
        </div>
        <div className={styles.body}>
            <ul>
                <li 
                onClick={() => window.open(data[0].url, '_blank', 'noopener,noreferrer')}
                >
                <img src={data[0].urlToImage} />
                <h2>{data[0].title}</h2>
                </li>
                <li
                onClick={() => window.open(data[1].url, '_blank', 'noopener,noreferrer')}
                >
                <h2>{data[1].title}</h2>
                </li>
                <li
                onClick={() => window.open(data[2].url, '_blank', 'noopener,noreferrer')}
                >
                <h2>{data[2].title}</h2>
                </li>
               
            </ul>
        </div>
        
    </div>
  )
}

export default Kindpageright