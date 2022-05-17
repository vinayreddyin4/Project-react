import React from 'react';
import './App.css';
import Header from './Components/Header';


class App extends React.Component {

  render() {
    return (
      <div >
        <div className='brandName'>
        <h1 >
          Mandhadi's Shoppers Stop
        </h1>

        </div>
        
        <div className='headerMain'>
          <Header />
        </div>
      </div>
    );
  }
}


export default App;
