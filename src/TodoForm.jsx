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

        render() {
                return (
                        <div className="todo_form" style={{ width: '40%' }}>
                                <form >
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
