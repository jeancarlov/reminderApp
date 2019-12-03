import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
//initializing the store, provider component will pass the store to the whole app
import { Provider } from 'react-redux';
import reducer from './reducers/index';

//ReactDOM.render(<App />, document.getElementById('root'));


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
