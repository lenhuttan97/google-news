import React from 'react'
import styles from '../srceenpage/Screenpage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { selectDataSource } from '../../features/home/kindSlice';
import Flag from 'react-world-flags'

const flags = ["ae",
  "ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg","fr",
  "gb","gr","hk","hu","id","ie","il","it","jp","kr","lt","lv","ma","mx",
  "my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si",
  "sk","th","tr","tw","ua","us","ve","za"];

function Menu() {
    const data = useSelector(selectDataSource);
    const listdata = data.sources;
    console.log(listdata)
  return (
    <div className={styles.menu}>
    <ul>
      <li><a href='/google-news/home' ><FontAwesomeIcon icon={faHouse} size="1x" /></a></li>
      <li ><a>Chanel
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      <div className={styles.chanel}>
        <ul>
        {listdata.map((source) =>  <li>
            <a> {source.name}</a>
            
           </li>)}
        </ul>
          
        </div>
      </li>
      <li><a href='/google-news/page/business'>Business</a></li>
      <li><a href='/google-news/page/entertainment'>Entertainment</a></li>
      <li><a href='/google-news/page/health'>Health</a></li>
      <li><a href='/google-news/page/science'>Science</a></li>
      <li><a href='/google-news/page/sports'>Sports</a></li>
      <li><a href='/google-news/page/technology'>Technology</a></li>
      <li><a>Country
        <FontAwesomeIcon icon={faAngleDown} /></a>
        <div className={styles.chanel}>
        <ul style={{left:  "-460px"}}>
        {flags.map((flag, i) =>  <li>
          <Flag code={flag} height="25"/>
           </li>)}
        </ul>
        </div>
        </li>
        
    </ul>
  </div>
  )
}

export default Menu