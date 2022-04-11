import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

let rootReducer = (initialState='Anil',action)=>{
  let newState = initialState;

  if(action.type === 'abc'){
    newState = action.myfriend
    return newState;
  }else{
    return newState;
  }

  return newState;

}
let store = createStore(rootReducer);

/* console.log(store);

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({type:'abcd',fname:'Abhishesk'}); */


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
