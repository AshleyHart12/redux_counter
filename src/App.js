import React, {Component} from 'react'
import './App.css';
// import CreateTodo from './components/createToDo'
import Counter from './components/Counter'



class App extends Component{
  render(){
    return(
      <div className="App-header">
      <Counter/>
      {/* <CreateTodo/> */}
      </div>
    )
  }
}


export default App;
