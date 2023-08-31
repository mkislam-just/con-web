import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Component/Context/AuthProvider/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    
      <App />
    
    </AuthProvider>
  </React.StrictMode>,
 document.getElementById('root')
);