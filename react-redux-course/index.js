import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import PlayerReducer from "./src/redux/reducers/player";
import Scoreboard from "./src/containers/Scoreboard";

const store = createStore(
    PlayerReducer,
    window.devToolsExtension && window.devToolsExtension() // Enables redux dev tools extension in browser
);

render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>,
    document.getElementById("root")
);
