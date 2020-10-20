import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {fork, takeEvery} from 'redux-saga/effects';
import {useDispatch} from "react-redux";


export function* saga() {
  console.log('main'); //runs

  takeEvery('*', function*() {
    console.log('takeEvery') //doesnt run
  })

  fork(function* () {
    console.log('gen') // doesnt run
  });
}

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "hello", payload: "asd"});
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
