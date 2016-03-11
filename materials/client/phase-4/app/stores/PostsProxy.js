import PostsStore from '../stores/PostsStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';
import { POST_PERSIST } from '../dispatcher/Constants.js';
import { POSTS_FETCH_SUCCESS } from '../dispatcher/Constants.js';

let store = new PostsStore();
Dispatcher.register((action) => {
  switch(action.actionType) {
    case POST_PERSIST:
      var item = action.model;
      action.type == 'create' ?
        store.createItem(item) :
        store.updateItem(item);
      break;
    case POSTS_FETCH_SUCCESS:
      store.init(action.items);
      break;
  }
});

export default store;
