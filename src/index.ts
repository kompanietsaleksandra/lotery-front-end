import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.render(
//     <App />,
//     document.querySelector('#app')
// );
ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);