import React from 'react'
import styles from '../srceenpage/Screenpage.module.css'

function Kindnews(props) {
    const data = props.data.articles;
    // console.log(data);
    return (
        <div className={styles.kindnewscontainer}>
            <div className={styles.headkind}
              
            >
              <h2 >
                <a href={'/google-news/page/' + props.kind}>
                {props.kind}
                </a></h2>
            </div>
            <div className={styles.bodykind}>
                <div className={styles.left}
                onClick={() => window.open(data[0].url, '_blank', 'noopener,noreferrer')}>
                    <img src={data[0].urlToImage} />
                    <span>
                        <h2>{data[0].title}</h2>
                        <p>{data[0].description}</p>
                    </span>
                </div>
                <div className={styles.right}
                  onClick={() => window.open(data[1].url, '_blank', 'noopener,noreferrer')}
                >
                    <h2>{data[1].title}</h2>
                    <p>{data[1].description}</p>
                </div>
            </div>
            <div className={styles.footkind}>
                <ul>
                    <li><h2   onClick={() => window.open(data[2].url, '_blank', 'noopener,noreferrer')}>{data[2].title}</h2></li>
                    <li><h2   onClick={() => window.open(data[3].url, '_blank', 'noopener,noreferrer')}>{data[3].title}</h2></li>
                    <li><h2   onClick={() => window.open(data[4].url, '_blank', 'noopener,noreferrer')}>{data[4].title}</h2></li>
                </ul>
            </div>
        </div>
    )
}

export default Kindnews;