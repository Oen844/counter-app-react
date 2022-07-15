import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title= "Hola buenos días" subtitle={2134}/>
    </React.StrictMode>
);

