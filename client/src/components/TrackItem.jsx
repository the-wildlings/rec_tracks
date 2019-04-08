import React from 'react';
import styles from '../../dist/styles/app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const TrackItem = (props) => {
  return (
    <div className={styles.row}>
      <div className={`${styles.playCol} ${styles.playDetail}`}>
        <img src="https://cdn.cp.adobe.io/content/2/rendition/71d1c3da-f692-4ab8-8952-cff3b35ee3b9/version/1/format/jpg/dimension/width/size/1200" />
        <div id={styles.miniPlay}><FontAwesomeIcon icon={faPlay} /> </div>
        <FontAwesomeIcon icon={faTasks} id={styles.miniQueue} />
      </div>
      <div className={styles.titleCol}>
        <span className={styles.titleDetail}>{props.song.title}</span> {/* */
        }<span className={styles.versionDetail}>{props.song.version}</span>
      </div>
      <div className={`${styles.artistCol} ${styles.artistDetail}`}>{props.song.artist}</div>
      <div className={`${styles.remixerCol} ${styles.remixerDetail}`}></div>
      <div className={`${styles.labelCol} ${styles.labelDetail}`}>{props.song.label}</div>
      <div className={`${styles.genreCol} ${styles.genreDetail}`}>{props.song.genre}</div>
      <div className={`${styles.releasedCol} ${styles.releasedDetail}`}>{props.song.released}</div>
      <div className={`${styles.priceCol} ${styles.priceDetail}`}>
        <div id={styles.innerBox}>${props.song.price}</div>
        <div id={styles.boxArrow}><FontAwesomeIcon icon={faChevronDown} /></div>
      </div>
    </div>
  )
}

export default TrackItem;