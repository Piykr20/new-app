// step -1 -- first import the ADD_TODO and DELETE_TODo
import { ADD_TODO,DELETE_TODO,EDIT_TODO}from  "./actionType";

//step-2 --Create a function for add todo
const addTodo=(todo)=>{
    return{
        //its return type and data
        type:ADD_TODO,
        todo:todo
    };
};


//step-3 create a function for delete todo
const deleteTodo=(todo)=>{
    return{
        //its return type and data
        type:DELETE_TODO,
        todo:todo
    };
};

const editTodo = (oldTodo, newTodo) => {
    return {
        //its return type and data
        type: EDIT_TODO,
        oldTodo: oldTodo,
        newTodo: newTodo
    };
};
//now export
export{addTodo,deleteTodo,editTodo};
