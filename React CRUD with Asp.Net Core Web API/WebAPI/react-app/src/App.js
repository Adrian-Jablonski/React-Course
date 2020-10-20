import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidate from './components/DCandidates';

function App() {
  return (
    <Provider store={store}>
      <DCandidate />
    </Provider>
  );
}

export default App;
