import React from 'react';
import styles from '../../dist/styles/app.css';
import TrackItem from './TrackItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'


const Track = (props) => {
  if (props.songList.length) {
    console.log(props.songList[0].id)
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${styles.titleBottom}`}>
        RECOMMENDED TRACKS
        <div className={styles.buttons}>
          <div className={styles.playButton} onClick={() => props.play(props.songList[0].id)}>
            <FontAwesomeIcon icon={faPlay} id={styles.playButton} />
          </div>
          <div onClick={props.queue} onClick={() => props.queue(props.songList[0].id)}>
            <FontAwesomeIcon icon={faTasks} id={styles.queueButton} />            
          </div>
        </div>
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