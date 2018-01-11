import React from 'react';
import ReactDOM from 'react-dom';
import {Browserouter, Match, Miss} from 'react-router';

import './css/style.css';
import App from './components/App';

import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <Browserouter>
      <div>
        <Match exacly pattern="/" component={StorePicker} />
        <Match  pattern="/store/:storeId" component={App} />
        <Miss component={notFound} />
      </div>
    </Browserouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
