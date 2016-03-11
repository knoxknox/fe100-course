import React from 'react';

class PostsRibbon extends React.Component {

  render() {
    return <div>{this.renderData(this.props.posts)}</div>;
  }

  renderData(posts) {
    return posts.map(post => {
      return(
        <div key={post.id} className="blog-post">
          <h2 className="blog-post-title">
            <a href={`#/update/${post.id}`}>{post.title}</a>
          </h2>
          <p className="blog-post-content description">{post.body}</p>
        </div>
      );
    });
  }

}

export default PostsRibbon;
