import React from 'react';
import './Image.js';

class Image extends React.Component {
    render() {
      return <div>
    <div className="profile-name"><b>Hi, I'm Rajan</b>
        
    </div>
  <div className="profile-subheader">I'm a high school student <br></br>driven by <b>innovation.</b>
  </div>
  <div className="links-cover">
    <a className="links" href="https://www.notion.so/itsrajan05/Rajan-Agarwal-4a89c1996288470387a4d6c59b8704d6" target="_blank">Temporary Website 🚀</a>
    <a href="https://linkedin.com/in/itsrajan05" className="links" target="_blank">Linkedin 🏢</a>
    <a className="links" href="https://www.medium.com/@itsrajanagarwal" target="_blank">Writings ✍️</a>
    <a className="links" href="https://github.com/itsrajan" target="_blank">Github 💻</a>
    <a className="links" href="https://mailto:rajan.ag005@gmail.com" target="_blank">Contact 🎩</a>
  </div>

      </div>;
    }
  }

  export default Image;