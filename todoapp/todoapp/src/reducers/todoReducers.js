import { ADD_TODO } from "../action/actionType";
import {DELETE_TODO} from "../action/actionType";
import { EDIT_TODO }  from "../action/actionType";
//step-1-- create a intilial state
const intilialState={
    //todos is like array which store the data
    todos:["PYTHON","JAVASCRIPT","HTML","CSS"]
}

//step-2 create addTodo function ,which concat the input value 
const addTodo=(state,action)=>{
    return{...state,todos:state.todos.concat(action.todo)}
}
//step-3 create deleteTodo function ,which delete the input value 
const deleteTodo=(state,action)=>{
    return{...state,todos:state.todos.filter((data)=>{
        return data!==action.todo;
    })}
}
//clear the todo

//edit todo
const editTodo = (state, action) => {
    const editedTodos = state.todos.map(todo => {
        if (todo === action.oldTodo) {
            return action.newTodo;
        } else {
            return todo;
        }
    });
    return { ...state, todos: editedTodos };
}

//step-4 reducers -it is main function
const todoReducer=(state=intilialState,action)=>{
    //now we use condition for action means what we performs 
    switch(action.type){
        case ADD_TODO:return addTodo(state,action);
        case DELETE_TODO:return deleteTodo(state,action);
        case EDIT_TODO:return editTodo(state, action);
        default: return state;
    }
}

export default todoReducer;