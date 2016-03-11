import React from 'react';

import Header from '../views/Header.jsx';
import PostsCount from '../views/PostsCount.jsx';
import PostsRecent from '../views/PostsRecent.jsx';
import PostsRibbon from '../views/PostsRibbon.jsx';

import BaseRoute from '../routes/BaseRoute.js';
import PostsStore from '../stores/PostsProxy.js';

class IndexRoute extends BaseRoute {

  _getStore() {
    return PostsStore;
  }

  _getState() {
    return {
      posts: this._getStore().getAll()
    };
  }

  render() {
    return(
      <div className="container">
        <Header />

        <div className="row">
          <div className="col-sm-8 blog-main">
            <div id="content">
              <PostsRibbon posts={this.state.posts} />
            </div>
          </div>

          <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <PostsCount posts={this.state.posts} />
            <PostsRecent posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;
