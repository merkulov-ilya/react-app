import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './index';

function App() {
  const dispatch = useDispatch();
  const value = useSelector<ReturnType<typeof store.getState>, number>((state) => state.counter.value);

  //  Number(prompt('How many?'))
  return (
    <div>
      <h2>Basic Legacy React App</h2>
      <button onClick={() => dispatch({ type: 'counter/increment', payload: 2 })}>+</button>
      <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
      {value}
    </div>
  );
}

function BasicLegacyReactApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default BasicLegacyReactApp;
