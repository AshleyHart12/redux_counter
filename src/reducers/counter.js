const INITIAL_DATA = []

const counterReducer = (state = INITIAL_DATA, action) => {
    switch(action.type){
        case 'ADDITEM':
            return [
                ...state,{
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
            case 'DELETE_ITEM':
                const numIndex = parseInt(action.id)
                return state.filter(todo => todo.id !== numIndex);
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;