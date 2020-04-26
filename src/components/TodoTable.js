import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteTodo, toggleTodo, setVisibilityFilter} from '../actions/index'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../actions/actionTypes'
import {bindActionCreators} from 'redux'



class todoTable extends Component {
render(){
    return (
        <div>
           <ul>
            <li
                className={(this.props.setVisibilityFilter === SHOW_ALL ? 'active' : '')} onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>
                    ALL
            </li>
            <li className={(this.props.setVisibilityFilter === SHOW_COMPLETED ? 'active' : '')} onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}>
                    COMPLETED
            </li>
            <li className={(this.props.setVisibilityFilter === SHOW_ACTIVE ? 'active' : '')} onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}>
                    COMPLETED
            </li>
           </ul> 

           {this.props.todos.length !== 0 ? (
               <table>
                   <thead>
                       <tr>
                           <th>Todos</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.props.todos.map(todo => (
                           <tr key={todo.id}>
                               <td style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                                   {todo.text}{todo.completed === true ? "(completed)" : ""}
                               </td>
                               <td>
                                   <span onClick={() => this.props.deleteTodo(todo.id)} />
                                   <span onClick={() => this.props.toggleTodo(todo.id)} />
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table> 
           ) : (
               <div>
                   Todo List is empty or Filter results show no results
               </div>
           )}{""}
        </div>
      );
    }
}

const getVisibileTodos = (todos, filter) => {
    switch(filter){
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return { todos: getVisibileTodos(state.todos, state.setVisibilityFilter),
        VisibilityFilter: state.setVisibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { deleteTodo, toggleTodo, setVisibilityFilter}, dispatch
    );
};


export default connect(mapDispatchToProps, mapStateToProps)(todoTable)