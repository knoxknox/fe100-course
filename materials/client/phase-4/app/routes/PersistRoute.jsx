import React from 'react';
import Moment from 'moment';
import Pikaday from 'pikaday';
import ReactFormal from 'react-formal';

import Header from '../views/Header.jsx';
import BaseRoute from '../routes/BaseRoute.js';

import PostForm from '../contracts/PostForm.js';
import PostsStore from '../stores/PostsProxy.js';
import PostActions from '../actions/PostPersist.js';

class PersistRoute extends BaseRoute {

  _getStore() {
    return PostsStore;
  }

  _getState() {
    let id = this.props.params.id;
    let defaults = { id: Date.now() };
    return { post: this._getStore().getById(id) || defaults };
  }

  render() {
    return(
      <div className="container">
        <Header />
        {this.renderForm()}
      </div>
    );
  }

  renderForm() {
    return(
      <ReactFormal schema={PostForm} value={this.state.post}
        onSubmit={this.onSubmit.bind(this)} onChange={post => this.setState({post})}>
        <div className="form-group">
          <label htmlFor="title">Title (0..100)</label>
          <ReactFormal.Field id="title" name="title" className="form-control" placeholder="Post title" />
          <ReactFormal.Message for="title" />
        </div>

        <div className="form-group">
          <label htmlFor="body">Body (200..5000)</label>
          <ReactFormal.Field id="body" name="body" className="form-control" placeholder="Post body" />
          <ReactFormal.Message for="body" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date (YYYY-MM-DD)</label>
          <ReactFormal.Field id="date" ref="date" name="date" className="form-control" placeholder="Post date" />
          <ReactFormal.Message for="date" />
        </div>

        <ReactFormal.Button type="submit" className="btn btn-primary">Save post</ReactFormal.Button>
      </ReactFormal>
    );
  }

  componentDidMount() {
    super.componentDidMount();
    new Pikaday({
      field: React.findDOMNode(this.refs.date),
      onSelect: this.onPikadaySelect.bind(this)
    });
  }

  mode() {
    let params = this.props.params;
    return params.id ? 'edit' : 'create';
  }

  onSubmit(data) {
    PostActions.persistPost(data, this.mode());
  }

  onPikadaySelect(value) {
    let state = this.state.post;
    state.date = Moment(value).format('YYYY-MM-DD');

    this.setState({ post: state });
  }

}

export default PersistRoute;
