import React from 'react';
import styles from '../../dist/styles/app.css';

const TrackItem = (props) => {
  return (
    <div className={styles.row}>
      <div className={styles.playcol}></div>
      <div className={styles.titlecol}>{props.song.title} {props.song.version}</div>
      <div className={styles.artistcol}>{props.song.artist}</div>
      <div className={styles.remixercol}></div>
      <div className={styles.remixercol}>{props.song.label}</div>
      <div className={styles.remixercol}>{props.song.genre}</div>
      <div className={styles.remixercol}>{props.song.released}</div>
    </div>
  )
}

export default TrackItem;