import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// initialState
// defaultState

// function counterReducer(state = { value: 0 }, action: Action<string> & { payload: number }) {
function counterReducer(state = { value: 0 }, action: { type: string; payload?: number }) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, value: state.value + (action.payload ?? 0) };
    case 'counter/decrement':
      return { ...state, value: state.value - 1 };
    default:
      // throw new Error();
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

// export const store = createStore((s) => s);
export const store = createStore(rootReducer, composeWithDevTools());
