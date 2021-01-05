import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Layouts/Menu';

function Index() {
  return (
    <div>
       <Menu /> 
    </div>
  )
}

ReactDOM.render(
  <Index />,
document.getElementById('root')
);
