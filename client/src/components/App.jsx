import styles from '../../dist/styles/app.css';
import React, { Component } from 'react';
import Tracks from './Tracks';
import Footer from './Footer';
import Song from './Song';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      songList: [],
      currentSong: null
    }
    this.addToPlayer = this.addToPlayer.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.randomTrack = this.randomTrack.bind(this);
    this.clickedSong = this.clickedSong.bind(this);
  }

  componentDidMount() {
    this.fetchSongs();
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
    .then(data => this.setState({allSongs: data.data}, () => {this.randomSongs(); this.randomTrack()}))
    .catch(err => console.error(err));
  }

  randomSongs() {
    let nums = [];
    while (nums.length < 20) {
      let rand = Math.floor(Math.random() * 100);
      if (!nums.includes(rand)) {
        nums.push(rand);
      }
    }
    let {songList} = this.state;
    for (let i = 0; i < nums.length; i++) {
      songList.push(this.state.allSongs[nums[i]])
    }
    this.setState({songList})
  }

  randomTrack() {
    // this.state.allSongs[Math.floor(Math.random() * 100)]
    let randSong = this.state.allSongs[Math.floor(Math.random() * 100)]
    this.setState({currentSong: randSong})
  }

  clickedSong(id) {
    this.setState({currentSong: this.state.songList[id]})
  }

  render() {
    return (
      <div className={styles.element}>
        { this.state.songList.length !== 0 &&
          <Song song={this.state.currentSong} play={this.addToPlayer} queue={this.addToQueue}/>
        }
        <Tracks songList={this.state.songList} play={this.addToPlayer} queue={this.addToQueue} clickedSong={this.clickedSong}/>
        <Footer />
      </div>
    )
  }
}

