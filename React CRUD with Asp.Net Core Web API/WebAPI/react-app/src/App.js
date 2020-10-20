import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidate from './components/DCandidates';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <DCandidate />
      </Container>
    </Provider>
  );
}

export default App;
