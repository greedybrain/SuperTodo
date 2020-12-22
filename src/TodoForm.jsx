import React, { Component } from 'react'

export default class TodoForm extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        // this is the todo that a user is entering into the todo form
                        todoValue: ""
                }
        }

        // this method updates the todoValue in the state as the user types
        handleChange = event => { 
                // this setState takes in an argument containing an object that has key/value pairs. The key is the property(i.e todoValue), and the value is what we set the key to (i.e event.target.value)
                this.setState({
                        // event.target is the HTML element in which an event is happening, in our case the event.target is the input tag/element. We then extract the value that is being typed into the input field (i.e "Buy groceries")
                        todoValue: event.target.value
                })
        }

        // the handleSubmit method will always be dependent on the handleChange method above because it needs a valid value to submit (i.e todoValue)
        handleSubmit = event => {
                event.preventDefault()

                const task = this.state.todoValue
                console.log(task);

                // we are grabbing the handleAddingTodo method out of props, since we have it in props because it was passed down to the TodoForm(this component) from the TodoList component
                this.props.handleAddingTodo(task)

                // this is simply clearing the input field after you hit the add button, for when you are ready to add another todo item
                this.setState({todoValue: ''})
                event.target.reset()
        }

        render() {
                return (
                        <div className="todo_form" style={{ width: '40%' }}>
                                <form onSubmit={this.handleSubmit}>
                                        <input 
                                                type="text" 
                                                placeholder="Add todo"
                                                defaultValue={this.state.todoValue} // this value will change in realtime as the user types somehting new into the input field
                                                onChange={this.handleChange}
                                        />
                                        <button type="submit" style={{ width: "100%", marginTop: "15px" }}>Add</button>
                                </form>
                        </div>
                )
        }
}
