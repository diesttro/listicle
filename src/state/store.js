import { createStore } from 'redux';
import rootReducer from './reducers';

const preloadState = {
  articles: [
    {
      id: 'kehc4iom',
      date: 1598806525845,
      title: 'Demo article',
      description: 'Feel free to edit or delete it',
      image:
        'https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg',
    },
  ],
};

const store = createStore(
  rootReducer,
  preloadState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
