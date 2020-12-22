import React, { Component } from 'react'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
        constructor(props) {
                super(props) 
                        this.state = {
                                todos: [],
                        }
        }

        // the 'this' always referes to the component(i.e TodoList) itself

        // this method is being passed down to the form because the form is where we would handle the adding of a todo item
        handleAddingTodo = todo => {
                this.setState(prevState => {
                        return {
                                todos: [...prevState.todos, todo]
                        }
                })
        }

        render() {
                return (
                        <div className="todo_list">
                                <TodoForm 
                                        // we name the prop handleAddingTodo which by convention matches the name of the method above on line 13 - 19 that we're passing down
                                        handleAddingTodo={this.handleAddingTodo} 
                                />
                        </div>
                )
        }
}
