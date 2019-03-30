import React from 'react';
import styles from '../../dist/styles/app.css';
import TrackItem from './TrackItem.jsx';

const Track = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        RECOMMENDED TRACKS
      </div>
      <br />
      <div className={`${styles.row} ${styles.headers}`}>
        <div className={styles.playcol}></div>
        <div className={styles.titlecol}>TITLE</div>
        <div className={styles.artistcol}>ARTISTS</div>
        <div className={styles.remixercol}>REMIXERS</div>
        <div className={styles.labelcol}>LABEL</div>
        <div className={styles.genrecol}>GENRE</div>
        <div className={styles.releasedcol}>RELEASED</div>
      </div>
      {props.songList.map((song, index) => <TrackItem song={song} key={index}/>)}
    </div>
  )
}

export default Track;