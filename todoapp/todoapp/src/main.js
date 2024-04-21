import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "./store";
import { addTodo,deleteTodo,editTodo } from "./action/typeAction";
import './todo.css';

class Main extends Component {
  constructor() {
    super();

    this.state = {//inbuilt function of a class component,which actually maintain the state like useState
      todo: ""
    }
  }

  render() {
    return (
      <div >
        <body>
          <div id="mydiv" className={"header"}>
            <h2 class="h2">TODO List</h2>
            <input type="text" id="myInput" placeholder="Add TODO" value={this.state.todo} onChange={this.onChange}>
            </input>
           
            <button onclick="newElement()" id="btn1" className={"button1"} onClick={this.addTodo}>Add</button>
           
          </div>
      
            <ul id="myUL">
              {this.props.todos.map((todo,index)=>
                <li>{todo}
               <button id={todo} className={"button2"} onClick={this.deleteTodo}>Delete</button>
               <button className={"button3"} onClick={() => this.editTodoPrompt(todo)}>Edit</button>
               
                </li>
                
              
              )}
            </ul>
          </body>
          </div>

            );
          }

  onChange = event => {
    this.setState({ todo: event.target.value });
  }

  addTodo = () => {
    store.dispatch(
      addTodo(this.state.todo)
    );
  }


deleteTodo=(event)=>{
  console.log(event.target.id)
  store.dispatch(
    deleteTodo(event.target.id)
  );
}

editTodoPrompt = (todo) => {
  const newTodo = prompt("Enter the new value for todo:", todo);
  if (newTodo !== null && newTodo.trim() !== "") {
    store.dispatch(editTodo(todo, newTodo));
  }
}
}

const mapStateToProps = (store) => {
  return {
    todos: store.todos
  }
}


export default connect(mapStateToProps)(Main);
