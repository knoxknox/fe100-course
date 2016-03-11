import BaseStore from '../stores/BaseStore.js';
import { POST_UPDATE } from '../dispatcher/Constants.js';

class PostsStore extends BaseStore {

  emitChange() {
    this.emit(POST_UPDATE);
  }

  addChangeListener(callback) {
    this.addListener(POST_UPDATE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(POST_UPDATE, callback);
  }

}

export default PostsStore;
