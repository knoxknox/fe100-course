import React from 'react';

class Header extends React.Component {

  render() {
    return(
      <div id="header">
        <div className="blog-header">
          <h1 className="blog-title">Post list</h1>
          <p className="lead blog-description">modern web frameworks</p>
        </div>
      </div>
    );
  }

}

export default Header;
