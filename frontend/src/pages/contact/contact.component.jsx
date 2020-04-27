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
      
          <FaGithubSquare className="icon"/>
          <FaLinkedin className="icon"/>
          <FaUserCircle className="icon"/>
        </div>
      </div>
    </div>
  )
}

export default Contact;