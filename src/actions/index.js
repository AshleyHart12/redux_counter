

let toDoItem = 2;

export const increment = numberToIncrement => {
    return {
        type: 'INCREMENT',
        payload: numberToIncrement
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}



export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text,
        id: toDoItem++
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})



