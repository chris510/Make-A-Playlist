import React from 'react';
import './about.styles.scss';

const About = () => {
  return (
    <div className="about">
      <div className="content">
      <h1>APP NAME HERE</h1>
        <div className="content-inner">
          <p>Welcome to APP NAME HERE, a web app that allows you to make a Spotify playlist full of your favorite songs by your favorite artist and artist genres that are similar to them! Just enter the name of the artist below and click Make Playlist!</p>
          <p>If you also love the playlist that was generated with this app, you can choose to send it to your phone! Just enter your phone number and click Send!</p>
        </div>
      </div>
    </div>
  )
}

export default About;