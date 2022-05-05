import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter  } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux'; 
import allReducers from 'reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import Wrapper from 'components/Language';
import {LightgalleryProvider} from 'react-lightgallery';


const store = createStore(allReducers,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <Provider store={store}>
        <LightgalleryProvider>
          <Wrapper>
            <App />
          </Wrapper>
          </LightgalleryProvider>
      </Provider>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root'),
);
