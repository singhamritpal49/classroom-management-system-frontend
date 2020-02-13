import React from 'react';
import './App.css';
import AllStudent from './components/AllStudent'
import Management from './components/Management'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <AllStudent /> */}
         <Management />
      </header>
    </div>
  );
}

export default App;
