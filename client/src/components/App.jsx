import styles from '../../dist/styles/app.css';
import React, { Component } from 'react';
import Tracks from './Tracks';
import Song from './Song';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      songList: [],
      currentSong: []
    }
    this.addToPlayer = this.addToPlayer.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
  }

  componentDidMount() {
    this.fetchSongs();
    // this.randomSongs();
  }

  addToPlayer(id) {
    axios
    .get(`/api/play/${id}`)
    .then(data => data)
    .catch(err => console.error(err))
  }

  addToQueue(id) {
    axios
    .get(`/api/queue/${id}`)
    .then(data => data)
    .catch(err => console.error(err))
  }

  fetchSongs() {
    axios
    .get('/api/beats')
    .then(data => this.setState({songList: data.data}))
    .catch(err => console.error(err));
  }

  // randomSongs() {
  //   while (this.state.songList.length < 20) {
  //     let rand = this.state.allSongs[Math.round(Math.random() * (this.state.allSongs.length - 1))];
  //     if (!this.state.songList.includes(rand)) {
  //       this.state.songList.push(rand);
  //     }
  //   }
  // }

  render() {
    return (
      <div className={styles.element}>
        { this.state.songList.length !== 0 &&
          <Song song={this.state.songList[0]} play={this.addToPlayer} queue={this.addToQueue}/>
        }
        <Tracks songList={this.state.songList} play={this.addToPlayer} queue={this.addToQueue}/>
      </div>
    )
  }
}

