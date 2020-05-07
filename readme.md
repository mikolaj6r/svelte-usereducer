# Svelte's useReducer

Use the `useReducer` hook :)

```
// reducers.js
import { combineReducers } from 'svelte-usereducer'

import room from './room';
import me from './me';
import producers from './producers';

export default combineReducers({
    room,
    me,
    producers,
});


// index.js
import { onMount, setContext } from 'svelte';
import { useReducer } from 'svelte-usereducer'
import reducer from './reducers.js'

const initialState = {
    // ...
}

const initialFunc = () => {};

const [state, dispatch] = useReducer(reducer, initialState);  // or useReducer(reducer, initialState, initialFunc); 

// if You want to use it as context
setContext("store", {
    state,
    dispatch
})

// example usage
onMount(() => {
    console.dir($state);
})
```