import React from 'react'
import styles from '../srceenpage/Screenpage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faFileCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className={styles.footercontainer}>
<h1> Copyright  15/08/2022</h1>
<ul>
  <li  id={styles.face} onClick={() => window.open('https://www.facebook.com/tanle.97/', '_blank', 'noopener,noreferrer')}><FontAwesomeIcon icon={faMessage}/><a>Facebook</a></li>
  <li  id={styles.git} onClick={() => window.open('https://github.com/lenhuttan97', '_blank', 'noopener,noreferrer')}><FontAwesomeIcon icon={faFileCode}/><a>Github</a></li>
  <li  id={styles.mail} onClick={() => window.open('mailto:tan.lenhut97@gmail.com', '_blank', 'noopener,noreferrer')}><FontAwesomeIcon icon={faEnvelope}/><a>Mail</a></li>
</ul>
        </div>
  )
}

export default Footer