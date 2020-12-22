import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
        constructor(props) {
                super(props) 
                        this.state = {
                                todos: [],
                        }
        }

        // the 'this' always referes to the component (i.e TodoList) itself

        // this method is being passed down to the form because the form is where we would handle the adding of a todo item
        handleAddingTodo = todo => {
                this.setState(prevState => {
                        return {
                                // We make a copy of the current state which is prevState, then we update with a new todo
                                todos: [...prevState.todos, todo]
                        }
                })
        }

        // this method is rendering each todo item, we map each todo inside of our todos array to a Todo component (see Todo.jsx) which behind the scenes is a li tag (list item). We pass the Todo component a key attribute set to a value of index to uniquely identify each todo item, along with the actual todo content (i.e groceries, dealership, etc)
        renderTodoItems = () => {
                return this.state.todos.map((todo, index) => {
                        return <Todo key={index} todo={todo} />
                })
        }

        render() {

                return (
                        <div className="todo_list">
                                <TodoForm 
                                        // we name the prop handleAddingTodo which by convention matches the name of the method above on line 13 - 19 that we're passing down
                                        handleAddingTodo={this.handleAddingTodo} 
                                />
                                <ul>
                                        {/* this is where we invoke renderTodoItems to list all of the todo items */}
                                        { this.renderTodoItems() }
                                </ul>
                        </div>
                )
        }
}
