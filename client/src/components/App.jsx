import styles from '../../dist/styles/app.css';
import React, { Component } from 'react';
import Tracks from './Tracks';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: []
    }
  }

  componentDidMount() {
    this.fetchSongs();
  }

  fetchSongs() {
    axios
    .get('/api/beats')
    .then(data => this.setState({songList: data.data}))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className={styles.element}>
        <Tracks songList={this.state.songList}/>
      </div>
    )
  }
}

