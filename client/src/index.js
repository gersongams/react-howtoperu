import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Layout from "./pages/layout";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
