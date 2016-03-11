import React from 'react';

class PostsRecent extends React.Component {

  render() {
    return this.renderData(this.props.posts);
  }

  renderData(posts) {
    posts = posts.slice(-5).reverse();

    return(
      <div id="posts-recent">
        <div className="sidebar-module">
          <h4>Recent:</h4>
          <ol className="list-unstyled">
            { posts.map(x => <li key={x.id}><a href={`#/update/${x.id}`}>{x.title}</a></li>) }
          </ol>
        </div>
      </div>
    );
  }

}

export default PostsRecent;
