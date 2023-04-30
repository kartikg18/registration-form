import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Login from './common/Login';
import Signup from './common/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
    {/* <Signup/> */}
    
 
  </React.StrictMode>
);


reportWebVitals();
