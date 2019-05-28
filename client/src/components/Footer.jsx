import React from 'react';
import styles from '../../dist/styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Beatport-logo.svg" height="auto" width="140" alt="logo" />
          </div>
          <div className={styles.copyright}>© 2004-2019 Beatport, LLC</div>
          <div className={styles.social}>
            <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </div>
          <div>
            <img src="https://geo-pro.beatport.com/static/6df44c4fb0938668d159025479f09b6f.png" height="auto" width="110" alt="music" />
          </div>
        </div>
        <div className={styles.company}>
          <span>COMPANY</span>
          <ul>
            <li>About Beatport</li>
            <li>Customer Support</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Logos and Images</li>
            <li>Terms and Conditions</li>
            <li>Privacy and Cookie Policy</li>
            <li>Report Copyright Infringement</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className={styles.network}>
          <span>NETWORK</span>
          <ul>
            <li>Beatport How To</li>
            <li>Beatport Hype for Labels</li>
            <li>Beatport Monitor</li>
            <li>Beatport Sounds</li>
          </ul>
        </div>
        <div className={styles.language}>
          <span>LANGUAGE</span>
          <ul>
            <li>English</li>
            <li>Español</li>
            <li>Français</li>
            <li>Deutsch</li>
            <li>Português</li>
            <li>Nederlands</li>
            <li>Italiana</li>
            <li>日本語</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;