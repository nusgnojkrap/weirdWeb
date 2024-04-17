import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from './components/common/button';
// import Home from './components/views/Home';

// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <Button label="Click Me" onClick={() => alert('Button clicked!')} />
//       <Home />
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
