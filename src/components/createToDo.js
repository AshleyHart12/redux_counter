import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import Table from '../components/TodoTable'
import {bindActionCreators} from 'redux'


class CreateTodo extends Component {
    constructor(props){
    super(props)
    this.state = {
        todotext: ''
    }
    this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }  


render(){
    return (
        <div>
            <div>
                <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" placeholder="add todo here" />
                <button type="button" onClick={() => this.setState({todotext: ''})}>Cancel</button>
                <button type="button" onClick={() => {this.props.addItem(this.state.todotext); this.setState({todotext: ''})}}>Add Todo</button>
                <Table />
            </div>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)