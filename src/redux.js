import { createStore } from 'redux';



// STORE


// ACTION
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}


// REDUCER
const counter = (state = 0, action) => {
    switch (action.type){
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default: 
        return state;
    }
  }
  
let store = createStore(counter);

store.subscribe(() => console.log(store.getState))

// DISPATCH
store.dispatch(increment)
store.dispatch(decrement)


  // EXPECT IS A LIBRARY
//   expect(
//     counter (0, { type: 'INCREMENT'})
//   ).toEqual(1);
  
//   expect(
//     counter (1, { type: 'INCREMENT'})
//   ).toEqual(2);
  
//   expect(
//     counter (2, { type: 'DECREMENT'})
//   ).toEqual(1);
  
//   expect(
//     counter (1, { type: 'DECREMENT'})
//   ).toEqual(0);
  
//   expect(
//     counter (1, { type: 'SOMETHING ELSE'})
//   ).toEqual(0);
  
//   expect(
//     counter (undefined, {})
//   ).toEqual(0);

  
  console.log('Tests Passed!');
  