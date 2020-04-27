import React from 'react';
import './contact.styles.scss';

import  { FaGithubSquare, FaLinkedin, FaUserCircle} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
      <h1>Feel free to reach out!</h1>
        <div className="content-inner">
          <p>I'm love to build things and always looking for ways to improve! If you hav any ideas to make the app better, any bugs, or just want to say hello! Don't be hesitate to contact me about anything! I'm always happy to chat.</p>
          <a href="https://github.com/chris510" target="_blank">
            <FaGithubSquare className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/trinh-christopher/" target="_blank">
            <FaLinkedin className="icon"/>
          </a>
          <a href="https://www.chris-trinh.com/" target="_blank">
            <FaUserCircle className="icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;