import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=> {root.render(<App></App>);},1000);



