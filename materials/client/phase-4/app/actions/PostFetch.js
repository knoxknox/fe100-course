import Resource from '../resources/PostResource.js';
import Dispatcher from '../dispatcher/Dispatcher.js';
import { POSTS_FETCH_SUCCESS } from '../dispatcher/Constants.js';
import { POSTS_FETCH_FAILURE } from '../dispatcher/Constants.js';

export default {
  loadPosts() {
    Resource.fetch().
      then((items) => {
        Dispatcher.dispatch({ actionType: POSTS_FETCH_SUCCESS, items: items });
      }).
      catch((errors) => {
        Dispatcher.dispatch({ actionType: POSTS_FETCH_FAILURE, errors: errors });
      });
  }
};
