import React from 'react';

class BaseRoute extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._getState();
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState(this._getState());
  }

  componentDidMount() {
    this._getStore().addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    this._getStore().removeChangeListener(this._onChange);
  }

}

export default BaseRoute;
