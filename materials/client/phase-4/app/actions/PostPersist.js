import Resource from '../resources/PostResource.js';
import Dispatcher from '../dispatcher/Dispatcher.js';
import { POST_PERSIST } from '../dispatcher/Constants.js';

export default {
  persistPost(model, type) {
    window.location.hash = '#';
    Dispatcher.dispatch({ actionType: POST_PERSIST, model: model, type: type });
  }
};
