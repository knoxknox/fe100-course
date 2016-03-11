import React from 'react';

class Navigation extends React.Component {

  render() {
    return(
      <div id="menu">
        <div className="blog-masthead">
          <div className="container">
            <nav className="blog-nav">
              <a className="blog-nav-item" href="#/index">Home</a>
              <a className="blog-nav-item" href="#/create">Create</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }

}

export default Navigation;
