export default class SharedStorage {
  data

  constructor() {
    this.data = {
      currentStyles: [],
    }
  }

  get(key) {
    return this.data[key]
  }

  set(key, value) {
    this.data[key] = value
  }

  remove(key) {
    delete this.data[key]
  }

  clear() {
    this.data = {}
  }

  keys() {
    return Object.keys(this.data)
  }

  values() {
    return Object.values(this.data)
  }

  entries() {
    return Object.entries(this.data)
  }

  has(key) {
    return this.data.hasOwnProperty(key)
  }

  get size() {
    return this.keys().length
  }

  get length() {
    return this.size
  }
}
