import React, { useState, useEffect, useRef } from 'react'
import Moment from 'react-moment'
import styles from '../srceenpage/Screenpage.module.css'


function Slider(props) {
    const datas = props.data;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 25000;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === datas.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (

        <div className={styles.slider} >
            <div className={styles.slideshow}>
                {datas.length === 0 ? null : datas.map((data, i) =>
                    <div className={styles.slidermain}
                        key={i}
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                        onClick={() => window.open(data.url, '_blank', 'noopener,noreferrer')}
                  >
                        <img src={data.urlToImage} />
                        <span >
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a>{data.author}</a>
                            <Moment fromNow >{data.publishedAt}</Moment>
                        </span>
                    </div>
                )}
            </div>


            <div className={styles.slideroption}>
                {datas.length === 0 ? null : datas.map((data, i) =>
                    <div className={styles.slideroptionitem +' '+(i===index ? styles.active : null)} key={i}
                    onClick={() => {
                        setIndex(i);
                      }}
                    >
                        <h2  >{data.title}</h2>
                        <span onClick={() => window.open(data.url, '_blank', 'noopener,noreferrer')}
>
                            <a>{data.description}</a>
                            <Moment fromNow >{data.publishedAt}</Moment>
                        </span>
                    </div>
                )}
            </div>

        </div>

    )
}

export default Slider