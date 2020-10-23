import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidate from './components/DCandidates';
import { Container } from '@material-ui/core';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss>
        <Container maxWidth="lg">
          <DCandidate />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
