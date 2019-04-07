import { createStore } from 'redux';
import reducer from '../reducers/videos';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
// BEFORE
// const store = createStore(reducer, {
//   // videos: 'Platzi'
//   suggestionList: [],
//   categoryList: []
// })


// AFTER WITH PERSIST Redux
const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor };
