//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Local imports
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
//Local style imports
import './index.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
