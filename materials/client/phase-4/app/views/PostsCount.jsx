import React from 'react';

class PostsCount extends React.Component {

  render() {
    return this.renderData(this.props.posts);
  }

  renderData(posts) {
    return(
      <div id="posts-count">
        <div className="sidebar-module">
          <h4>Posts:</h4>
          <p>Number of posts: {posts.length}</p>
        </div>
      </div>
    );
  }

}

export default PostsCount;
