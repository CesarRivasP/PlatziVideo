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
  storage,
  // Para no persistir en caso de quedar en alguna de las pantallas que reproducen videos
  blacklist: [ 'selectedMovie' ] //leva dentro una lista de partes del store que no se quieren persistir
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor };
