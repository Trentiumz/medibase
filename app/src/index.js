import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Main extends React.Component{
  render(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Main />
)