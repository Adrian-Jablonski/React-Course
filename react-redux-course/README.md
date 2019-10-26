# Redux

## redux npm packages
- npm install redux react-redux --save

## Action Types
 An action type in Redux represents an explicit action type that will occur within the application. It is expressed in JavaScript as a string constant.

```javascript
// src/actiontypes/player.js
export const ADD_PLAYER = 'player/ADD_Player';
export const REMOVE_PLAYER = 'player/REMOVE_PLAYER';
export const UPDATE_PLAYER_SCORE = 'player/UPDATE_PLAYER_SCORE';
```

## Reducers
A Redux construct that is responsible for maintaining a specific portion of the Redux store, which holds the app's state. In JavaScript, a reducer is implemented as a pure function that takes two arguments, the current state and the action being taken, and produces the next state. In order for Redux to work properly, Reducers must not mutate the current state. In other words, the state for a reducer must be treated as immutable.

```javascript
// src/reducers/player.js
import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
    {
        name: 'Jim Hoskins',
        score: 31,
    },
    {
        name: 'Andrew Chalkley',
        score: 20,
    },
    {
        name: 'Alena Holligan',
        score: 50,
    },
];

export default function Player(state=initialState, action) {    // state=initialState assigns a default value
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];

        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return [
                state.map((player, index) => {
                    if (index === action.index) {
                        return {
                            ...player,
                            score: player.score + action.score
                        }
                    }
                })
            ];

        default:
            return state;
    }
}
```

## Actions and Action Creatores
Actions: Explicit events that occur in our application represented by a type and any relevant metadata associated with the action
Action Creators: In Redux, a construct for generating an action.

```javascript
import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = (name) => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    }
}

export const removePlayer = (index) => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index
    }
}

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
}
```