import { createStore } from 'redux';
import reducer from '../reducers/videos';

const store = createStore(reducer, {
  // videos: 'Platzi'
  suggestionList: [],
  categoryList: []
})

export default store;
