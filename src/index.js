import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter  } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux'; 
import allReducers from 'reducers/index';
import { Provider } from 'react-redux';
import SimpleReactLightbox from 'simple-react-lightbox';
import thunk from 'redux-thunk'; 
import Wrapper from 'components/Language';


const store = createStore(allReducers,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <Provider store={store}>
        <SimpleReactLightbox>
          <Wrapper>
            <App />
          </Wrapper>
        </SimpleReactLightbox>
      </Provider>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root'),
);
