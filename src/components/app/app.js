import React from 'react';
import './app.less';


function App() {
  return (
      <div>
        <div>First</div>
        <div onClick={(e) => {console.log(e)}}>First</div>
      </div>
  );
}

export default App;
