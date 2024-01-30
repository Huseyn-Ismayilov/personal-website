import React from 'react';
import ReactDOM from 'react-dom/client'
import store from './app/store.jsx'
import { Provider } from 'react-redux'
import './style.css'
import App from './app/App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
