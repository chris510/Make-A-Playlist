import React from 'react';
import './about.styles.scss';

const About = () => {
  return (
    <div className="about">
      <div className="content">
      <h1>Make a Playlist!</h1>
        <div className="content-inner">
          <p>Welcome to APP NAME HERE, a web app that allows you to make a Spotify playlist full of your favorite songs by your favorite artist and artist genres that are similar to them! Just enter the name of the artist below and click the play button! An algorithm was created using Spotify's own API to create a playlist of songs of the desired artist as well as songs of related artist!</p>
          <p>If you also love the playlist that was generated with this app, you can choose to send it to your phone! Just click the message icon in the playlist section, type in your US phone number, and click send!</p>
        </div>
      </div>
    </div>
  )
}

export default About;