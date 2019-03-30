import React from 'react';
import styles from '../../dist/styles/app.css';
import TrackItem from './TrackItem.jsx';

const Track = (props) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles.titleBottom}`}>
        RECOMMENDED TRACKS
      </div>

      {/* Header information */}
      <div className={styles.headers}>
        <div className={styles.playCol}></div>
        <div className={styles.titleCol}>TITLE</div>
        <div className={styles.artistCol}>ARTISTS</div>
        <div className={styles.remixerCol}>REMIXERS</div>
        <div className={styles.labelCol}>LABEL</div>
        <div className={styles.genreCol}>GENRE</div>
        <div className={styles.releasedCol}>RELEASED</div>
        <div className={styles.priceCol}></div>
      </div>

      {props.songList.map((song, index) => <TrackItem song={song} key={index}/>)}
    </div>
  )
}

export default Track;