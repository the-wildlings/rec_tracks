import React, {Component} from 'react';
import styles from '../../dist/styles/app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class TrackItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div className={styles.row}>
        <div className={`${styles.playCol} ${styles.playDetail}`}>
          <img src="https://cdn.cp.adobe.io/content/2/rendition/71d1c3da-f692-4ab8-8952-cff3b35ee3b9/version/1/format/jpg/dimension/width/size/1200" className={styles.pic}/>
          <div id={styles.miniPlay}><FontAwesomeIcon icon={faPlay} /> </div>
          <FontAwesomeIcon icon={faTasks} id={styles.miniQueue} />
        </div>
        <div className={styles.titleCol}>
          <span className={styles.titleDetail}>{this.props.song.title}</span> {/* */
          }<span className={styles.versionDetail}>{this.props.song.version}</span>
        </div>
        <div className={`${styles.artistCol} ${styles.artistDetail}`}>{this.props.song.artist}</div>
        <div className={`${styles.remixerCol} ${styles.remixerDetail}`}></div>
        <div className={`${styles.labelCol} ${styles.labelDetail}`}>{this.props.song.label}</div>
        <div className={`${styles.genreCol} ${styles.genreDetail}`}>{this.props.song.genre}</div>
        <div className={`${styles.releasedCol} ${styles.releasedDetail}`}>{this.props.song.released}</div>
        <div className={`${styles.priceCol} ${styles.priceDetail}`}>
          <div id={styles.innerBox}>${this.props.song.price}</div>
          <div id={styles.boxArrow} onClick={this.showMenu}><FontAwesomeIcon icon={faChevronDown} /></div>
        </div>
          {
            this.state.showMenu
              && (
                <div className={styles.menu}>
                  <div className={styles.innerRow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      height="13"
                      width="13"
                      viewBox="0 0 53.867 53.867"
                      preserveAspectRatio="none"
                      id={styles.star}
                    >
                      <polygon
                        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798
                      10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
                      />
                    </svg>
                    <div className={styles.innerElement}>
                      Main Cart
                    </div>
                  </div>   
                  <div className={styles.innerRow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      height="13"
                      width="13"
                      viewBox="0 0 512.004 512.004"
                      preserveAspectRatio="none"
                      id={styles.bin}
                      >
                        <g>
                          <g>
                            <path
                              d="M506.475,168.447c-4.57-5.399-11.281-8.495-18.41-8.495H23.939c-7.123,0-13.828,3.096-18.398,8.489
                                  c-4.265,5.035-6.192,11.585-5.345,18.088l27.4,285.944c0.024,0.221,0.048,0.441,0.078,0.656
                                  c2.41,18.04,17.73,31.642,35.639,31.642h385.38c18.828,0,34.529-14.419,35.716-32.298l27.4-285.938
                                  C512.655,180.033,510.734,173.482,506.475,168.447z M448.787,469.014c-0.018-0.03-0.107-0.048-0.095-0.036l-385.063,0.054
                                  c-0.155-0.072-0.382-0.34-0.453-0.549L37.033,195.752H474.97L448.787,469.014z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M466.779,91.21c-4.534-5.22-11.126-8.215-18.094-8.215H63.903c-6.962,0-13.584,3.108-18.171,8.525
                                  c-4.611,5.453-6.604,12.552-5.482,19.251l10.738,69.798l35.382-5.441l-8.668-56.339h357.192l-8.662,56.339l35.376,5.441
                                  l10.762-70.001C473.371,103.518,471.337,96.46,466.779,91.21z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M413.709,15.459c-4.534-5.226-11.132-8.227-18.112-8.227H117.003c-6.962,0-13.584,3.108-18.171,8.525
                                  c-4.617,5.453-6.604,12.552-5.476,19.299l10.738,68.605l35.364-5.536l-8.626-55.099h250.813l-9.074,54.949l35.316,5.834
                                  l11.394-68.975C420.295,27.772,418.261,20.715,413.709,15.459z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M331.169,272.703H180.835c-9.885,0-17.897,8.012-17.897,17.897c0,9.885,8.012,17.897,17.897,17.897h150.334
                                  c9.885,0,17.897-8.012,17.897-17.897C349.065,280.715,341.054,272.703,331.169,272.703z"
                            />
                          </g>
                        </g>
                      </svg>
                    <div className={styles.innerElement}>
                      Hold Bin
                    </div>
                  </div>   
                  <div className={styles.lastRow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      height="17"
                      width="17"
                      viewBox="0 0 100.021 100.021"
                      preserveAspectRatio="none"
                      id={styles.plusSign}
                    >
                      <g>
                        <path
                          d="M51.449,0.021C23.845-0.773,0.825,20.96,0.032,48.563c-0.014,0.486-0.021,0.972-0.021,1.458
                            c0,27.614,22.386,50,50,50s50-22.386,50-50C100.023,22.959,78.499,0.799,51.449,0.021z M78.011,57.021h-21v21h-14v-21h-21v-14h21
                            v-21h14v21h21V57.021z"
                        />
                      </g>
                    </svg>
                    <div className={styles.innerElement}>
                      NEW CART
                    </div>      
                  </div>       
                </div>
              )
          }
      </div>
    )
  }
}

export default TrackItem;
