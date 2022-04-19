import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter  } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux'; 
import allReducers from 'reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import Wrapper from 'components/Language';


const store = createStore(allReducers,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <Provider store={store}>
        <Wrapper>
          <App />
        </Wrapper>
      </Provider>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root'),
);
