import React, { useState } from 'react'
import styles from '../srceenpage/Screenpage.module.css'
import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faClock }  from '@fortawesome/free-regular-svg-icons'


function Header() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

    return (
        <header className={styles.container}>
            <div className={styles.topheader}>
                <div className={styles.logo}>
                    <a href='/google-news/'>
                        Google News
                    </a>
                    

                    <Moment format="DD/MM/YYYY">
                        {currentDateTime}
                    </Moment>
                </div>
                <div className={styles.search}>
                    <button type='button'  >
                    <FontAwesomeIcon icon={faClock} />
                        Last Update
                    </button>
                    <div className={styles.inputfield}>

                    <input type={Text} name="search" placeholder="Search.." size={20} />
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header