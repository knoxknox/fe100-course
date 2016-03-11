import { EventEmitter } from 'events';

class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = [];
  }

  init(items) {
    this.data = items;
    this.emitChange();
  }

  getAll() {
    return this.data;
  }

  getById(id) {
    return this.data.find(x => id == x.id);
  }

  createItem(item) {
    this.data.push(item);
    this.emitChange();
  }

  updateItem(item) {
    let idx = this.data.findIndex(x => x.id == item.id);
    this.data[idx] = item;
    this.emitChange();
  }

}

export default BaseStore;
