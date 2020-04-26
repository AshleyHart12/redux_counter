import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions/index'


function Counter() {
    const counter = useSelector(state => state.counter);
    // const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
      <>
        <h1>Counter {counter}</h1>
        <div class='buttons'>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        {/* {!isLogged ? <h3>I was made using Redux ;)</h3> : ''} */}
      </>
    );
  }
  
  export default Counter;
  
