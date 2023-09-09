import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Blogcomponenet } from './componenets/blogs/Blogcomponenet';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Blogcomponenet />
        </header>
      </div>
    </Provider>
  );
}

export default App;
