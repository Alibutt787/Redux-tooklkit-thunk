import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {fetchRandomNumber,increment,decrement} from './Store'

function App() {
  const state = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
     <br />  <br />  <br />
     ReduxState   {state}
     <br />  <br />  <br />
     <button onClick={() => dispatch(fetchRandomNumber())}>Fetch from server</button>
     <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
