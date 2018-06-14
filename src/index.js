import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ThemeProvider from 'uxi/Theme/ThemeProvider'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import reducer from './redsucer'
import App from './App';

// const reducers = [reducer];
const rootReducer = combineReducers({
  // ...reducers other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

reactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
)
