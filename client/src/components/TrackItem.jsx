import React from 'react';
import styles from '../../dist/styles/app.css';

const TrackItem = (props) => {
  return (
    <div className={styles.row}>
      <div className={styles.playCol}></div>
      <div className={styles.titleCol}>
        <span className={styles.titleDetail}>{props.song.title}</span> {/* */
        }<span className={styles.versionDetail}>{props.song.version}</span>
      </div>
      <div className={`${styles.artistCol} ${styles.artistDetail}`}>{props.song.artist}</div>
      <div className={`${styles.remixerCol} ${styles.remixerDetail}`}></div>
      <div className={`${styles.labelCol} ${styles.labelDetail}`}>{props.song.label}</div>
      <div className={`${styles.genreCol} ${styles.genreDetail}`}>{props.song.genre}</div>
      <div className={`${styles.releasedCol} ${styles.releasedDetail}`}>{props.song.released}</div>
      <div className={`${styles.priceCol} ${styles.priceDetail}`}>{props.song.price}</div>
    </div>
  )
}

export default TrackItem;