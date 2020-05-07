import { ActionINIT } from './utils'

import { writable } from 'svelte/store';

export default function useReducer(reducer, initialArg, initFunc) {

    const initialState =  initFunc instanceof Function && initFunc(initialArg) || initialArg;
	const { update, subscribe } = writable(initialState);
	
	function dispatch(action) {
		update(state => reducer(state, action));
	}
    
    dispatch({type: ActionINIT})
	return [{ subscribe }, dispatch];
}